import * as Dialog from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const Trigger = styled(Dialog.Trigger)`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 30px;
  `}

  :hover {
    background: url('/assets/imgs/iconmonstr-plus-1.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25%;
    background-color: rgba(255,255,255,0.25);

    filter: invert(1);
  }
`;

export const CloseModal= styled(Dialog.Trigger)`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.blue[600]};
    right: -1%;
    top: -1%;
    font-size: 1.25rem;
    background: ${theme.white[100]};
    border-radius: 1000px;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;  

export const ImageInput = styled.input`
  display: none;
`;

type ImageInputLabel = {
  url: string;
}

export const ImageInputLabel = styled.label`

  cursor: pointer;
  color: transparent;

  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 15px;
  margin-bottom: 15px;

  background: url('/assets/imgs/upload.svg');
  ${({ url }: ImageInputLabel) => css`
    background: url('/assets/imgs/upload.svg'), url(${url});
  `}
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0,0,0,0.25);
  background-size: 25%, cover;

  &:hover {
    background: url('/assets/imgs/upload.svg'), linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) );
    ${({ url }: ImageInputLabel) => css`
      background: url('/assets/imgs/upload.svg'), linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(${url});
    `}
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0,0,0,0.25);
    background-size: 25%, 100%, cover;
  }

  display: flex;
  justify-content: center;
  align-items: end;
`;

type DragAndDropOverlayInterface = {
  isDragging: boolean;
}

export const DragAndDropOverlay = styled.div`
  height: 0%;
  overflow: hidden;
  background: rgba(0,0,0,.5);
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  transition: .5s;
  transition: height .5s;
  pointer-events: none;

  ${({ isDragging }: DragAndDropOverlayInterface) => isDragging && css`
    height: 100%;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;