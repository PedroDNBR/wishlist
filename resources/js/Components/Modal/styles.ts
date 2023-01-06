import styled, { css } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 1000;
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.grey[600]};
    display: flex;
    gap: 3rem;
    min-width: 300px;
    padding: 30px;
    border-radius: 30px;
  `}
`;