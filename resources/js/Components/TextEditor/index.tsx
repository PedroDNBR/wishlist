import type { Editor } from '@tiptap/react'
import { useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MdFormatBold, MdFormatListBulleted, MdFormatListNumbered, MdOutlineTitle } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { MdFormatStrikethrough } from "react-icons/md";
import { TextAreaOptionsButton } from './style';

const extensions = [StarterKit]

export function TextEditorMenuBar({ editor }: { editor: Editor }) {
  // Read the current editor's state, and re-render the component when it changes
  const editorState = useEditorState({
    editor,
    selector: ctx => {
      return {
        isBold: ctx.editor.isActive('bold'),
        canBold: ctx.editor.can().chain().focus().toggleBold().run(),
        isItalic: ctx.editor.isActive('italic'),
        canItalic: ctx.editor.can().chain().focus().toggleItalic().run(),
        isStrike: ctx.editor.isActive('strike'),
        canStrike: ctx.editor.can().chain().focus().toggleStrike().run(),
        isCode: ctx.editor.isActive('code'),
        canCode: ctx.editor.can().chain().focus().toggleCode().run(),
        canClearMarks: ctx.editor.can().chain().focus().unsetAllMarks().run(),
        isParagraph: ctx.editor.isActive('paragraph'),
        isHeading1: ctx.editor.isActive('heading', { level: 1 }),
        isHeading2: ctx.editor.isActive('heading', { level: 2 }),
        isHeading3: ctx.editor.isActive('heading', { level: 3 }),
        isHeading4: ctx.editor.isActive('heading', { level: 4 }),
        isHeading5: ctx.editor.isActive('heading', { level: 5 }),
        isHeading6: ctx.editor.isActive('heading', { level: 6 }),
        isBulletList: ctx.editor.isActive('bulletList'),
        isOrderedList: ctx.editor.isActive('orderedList'),
        isCodeBlock: ctx.editor.isActive('codeBlock'),
        isBlockquote: ctx.editor.isActive('blockquote'),
        canUndo: ctx.editor.can().chain().focus().undo().run(),
        canRedo: ctx.editor.can().chain().focus().redo().run(),
      }
    },
  })

  return (
    <div>
        <TextAreaOptionsButton type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          isActive={editorState.isBold}
        >
          <MdFormatBold/>
        </TextAreaOptionsButton>
        <TextAreaOptionsButton type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          isActive={editorState.isItalic}
        >
          <MdFormatItalic />
        </TextAreaOptionsButton>
        <TextAreaOptionsButton type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          isActive={editorState.isStrike}
        >
          <MdFormatStrikethrough />
        </TextAreaOptionsButton>
        <TextAreaOptionsButton type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editorState.isBulletList}
        >
          <MdFormatListBulleted />
        </TextAreaOptionsButton>
        <TextAreaOptionsButton type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editorState.isOrderedList}
        >
          <MdFormatListNumbered />
        </TextAreaOptionsButton>
    </div>
  )
}