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

export const ImageInput = styled.input`
  display: none;
`;

export const ImageInputLabel = styled.label`
  cursor: pointer;
  color: transparent;

  width: 100%;
  aspect-ratio: 1/1;
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 15px;

  background: url('/assets/imgs/upload.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25%;
  background-color: rgba(255,255,255,0.25);

  filter: invert(1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

`;