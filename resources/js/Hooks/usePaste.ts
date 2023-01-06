import { useCallback, useEffect, useState } from "react";

interface DropzoneFile extends File {
  preview: string;
}

interface UsePasteOutput {
  getFiles: (e: ClipboardEvent) => DataTransferItem[];
  getAsPlainText: (e: ClipboardEvent) => void;
  pastedFiles: DropzoneFile[];
}

export function usePaste(): UsePasteOutput {
  const [pastedFiles, setPastedFiles] = useState<DropzoneFile[]>([]);

  function getFiles(e: ClipboardEvent): DataTransferItem[] {
    const clipboardItems = e.clipboardData?.items;

    const items = [].slice
      .call(clipboardItems)
      .filter(function (item: DataTransferItem) {
        return item.type.indexOf('image') !== -1;
      });

    if (items.length > 0) {
      return items;
    };

    return [];
  }

  function getFilesWithPreview(items: DataTransferItem[]) {
    return items.map((item: DataTransferItem) => {
      const blob = item.getAsFile();
      return Object.assign(blob, {
        preview: URL.createObjectURL(blob),
      })
    });
  }

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = getFiles(e);

    if (items.length === 0) return;

    const newFiles = getFilesWithPreview(items);

    setPastedFiles(newFiles);
  }, []);

  function getAsPlainText(e: ClipboardEvent) {
    // Insert text at the current position of caret
    const range = document.getSelection()?.getRangeAt(0);

    if (!range) return;

    range.deleteContents();

    const textNode = document.createTextNode(e.clipboardData?.getData('text/plain') ?? '');
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    const selection = window.getSelection();

    if (!selection) return;

    selection.removeAllRanges();
    selection.addRange(range);
  }

  useEffect(() => {
    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('paste', handlePaste);
    }
  }, [handlePaste]);

  return { getFiles, getAsPlainText, pastedFiles };
}
