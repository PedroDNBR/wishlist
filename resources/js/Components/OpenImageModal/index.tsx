import * as Dialog from '@radix-ui/react-dialog';
import { ImageInput, Trigger, Container, ImageInputLabel, DragAndDropOverlay, CloseModal } from "./styles";
import { Overlay, Content } from '../Modal/styles';
import { InputControlled } from '../Input';
import { useController, useForm, useWatch } from 'react-hook-form';
import { ButtonComponent } from '../Button';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { usePaste } from '@/Hooks/usePaste';
import { AiOutlineClose } from 'react-icons/ai';

export function OpenImageModal() {
  const {
    control,
    handleSubmit,
    setError,
    register,
  } = useForm();

  const [sentImage, setSentImage] = useState<File | null>();

  useEffect(() => {
    console.log(sentImage);
  }, [sentImage])

  const { pastedFiles } = usePaste();

  const { t } = useTranslation();

  const [imagePreviewUrl, SetImagePreviewUrl] = useState('');

  const [imageInputFile, setImageInputFile] = useState<File>();

  const imageUrl = useWatch({
    control,
    name: "image-url",
  });

  useEffect(() => {
    SetImagePreviewUrl(imageUrl);
      setSentImage(null);
    }, [imageUrl])

  useEffect(() => {
    if(pastedFiles[0]) {
      SetImagePreviewUrl(pastedFiles[0].preview);
      setSentImage(pastedFiles[0]);
    }
  }, [pastedFiles]);

  useEffect(() => {
    if(imageInputFile) {
      setSentImage(imageInputFile);
      SetImagePreviewUrl(URL.createObjectURL(imageInputFile));
    }

  }, [imageInputFile])

  const preventDragEvents = {
    onDragEnter: (e: any) => { e.preventDefault(); },
    onDragLeave: (e: any) => { e.preventDefault(); setIsDragging(false) },
    onDragOver: (e: any) => { e.preventDefault(); setIsDragging(true) },
  }

  function dragDropImage (e: any) {
    e.preventDefault()
    setIsDragging(false);
    setImageInputFile(e.dataTransfer.files[0]);
  }

  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <Dialog.Root>
        <Trigger>
        </Trigger>
        <Dialog.Portal>
          <Overlay>
            <Content>
                <Container>
                  <CloseModal>
                    <AiOutlineClose />
                  </CloseModal>
                  <ImageInputLabel htmlFor="image-file" url={imagePreviewUrl} onDrop={(e) => dragDropImage(e)} {...preventDragEvents}>
                    <DragAndDropOverlay isDragging={isDragging}>{t('inputs:drag-drop-here')}</DragAndDropOverlay>
                  </ImageInputLabel>
                  <div></div>
                  <ImageInput type='file' id="image-file" name="image-file" accept="image/*"
                    onChange={(e) => {
                      if(e.target.files)
                        setImageInputFile(e.target.files[0]);
                      e.target.value = '';
                    }}
                  />
                  <InputControlled label='Url ou Imagem copiada' type='text' name='image-url' max={512} control={control} />
                  <ButtonComponent name='Aplicar' />
                </Container>
            </Content>
          </Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}