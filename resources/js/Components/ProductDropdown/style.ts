import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ProductDropdownContent = styled(DropdownMenu.Content)`
  ${({theme}) => css`
    background-color: ${theme.grey[400]};
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
    gap: .25rem;
    margin-bottom: .5rem;
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
    gap: .25rem;
  `}
`;
