import styled, { css, DefaultTheme } from "styled-components";
import { Label, labelModifiers } from "../Input/style";
import { EditorContent } from "@tiptap/react";

export interface InputStyleProps {
    theme: DefaultTheme;
    isActive: boolean;
}

export const DescriptionEditorContainer = styled.div`
    ${({ theme }) => css`
        margin-bottom: 1.3375rem;
        padding: 10px 15px;
        display: flex;
        background-color: ${theme.grey[500]};
        border-radius: 15px;
        flex-direction: column;
        border: 2px solid transparent;
        &:focus-within {
            ${Label} {
                ${labelModifiers.active(theme)}
            }
            border: 2px solid ${theme.blue};
            -webkit-box-shadow: 0px 0px 0px 2px ${theme.fadeDarkBlue};
            box-shadow: 0px 0px 0px 2px ${theme.fadeDarkBlue};
        }
    `};
`;

export const textAreaOptionsButtonModifiers = {
    active: (theme: DefaultTheme) => css`
        color: ${theme.white[100]};
    `,
};

export const TextAreaOptionsButton = styled.button`
    ${({ theme, isActive }: InputStyleProps) => css`
        color: ${theme.grey[100]};
        ${isActive && textAreaOptionsButtonModifiers.active(theme)}
        font-size: 1.4rem;
        padding: 0.2rem;
    `};
`;

export const DescriptionEditorContent = styled(EditorContent)`
    ${({ theme }) => css`
        .tiptap {
            min-height: 8rem;
        }

        .ProseMirror:focus {
            outline: none;
        }

        ul {
            list-style: initial;
            margin: initial;
            padding: 0 0 0 1rem;
        }

        li {
            display: list-item;
        }

        ol {
            display: block;
            list-style-type: decimal;
            list-style-position: outside;
            margin: 1em 0;
            padding: 0 0 0 1rem;
        }

        color: ${theme.white[100]};

        margin-bottom: 0.35rem;
    `};
`;
