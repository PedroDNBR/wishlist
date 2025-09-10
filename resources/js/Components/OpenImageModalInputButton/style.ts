import * as Dialog from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";

export const Container = styled(Dialog.Trigger)`
    ${({ theme }) => css`
        position: relative;
        width: 100%;
        height: 5rem;
        color: ${theme.grey[100]};
        background-color: ${theme.grey[500]};
        margin-bottom: 1.3375rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        border-radius: 15px;
        border: 2px solid transparent;"
    `}
`;
