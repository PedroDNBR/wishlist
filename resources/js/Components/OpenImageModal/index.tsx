import * as Dialog from '@radix-ui/react-dialog';
import { ImageInput, Trigger, Container, ImageInputLabel } from "./styles";
import { Overlay, Content } from '../Modal/styles';
import { InputControlled } from '../Input';
import { useForm } from 'react-hook-form';
import { ButtonComponent } from '../Button';

export function OpenImageModal() {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  return (
    <>
      <Dialog.Root>
        <Trigger>
        </Trigger>
        <Dialog.Portal>
          <Overlay>
            <Content>
              <Container>
                <ImageInputLabel htmlFor="image-file"></ImageInputLabel>
                <ImageInput type='file' id="image-file" name="image-file" />
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