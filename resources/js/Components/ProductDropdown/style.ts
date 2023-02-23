import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ProductDropdownContent = styled(DropdownMenu.Content)`
  ${({theme}) => css`
    background-color: ${theme.grey[500]};
    border-radius: 15px;
    padding: .75rem;
  `}
`;

export const EditButton = styled(Dialog.Trigger)`
  ${({theme}) => css`
    all: unset;
    color: ${theme.white[100]};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: .5rem;
    margin-bottom: .75rem;
    svg {
      font-size: .9rem;
    }
  `}
`;

export const DeleteButton = styled.button`
  ${({theme}) => css`
    all: unset;
    color: ${theme.red};
    display: flex;
    align-items: center;
    justify-content: center ;
    cursor: pointer;
    gap: .5rem;
    svg {
      font-size: .9rem;
    }
  `}
`;
