import styled, { css } from "styled-components";

export const Input = styled.input`
    border: 0px;
    color: #f8f8f9;
    background-color: #323644;
    padding: 0;
    &:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;

const labelModifiers = {
    active: () => css`
        color: #1e84df;
    `,
    error: () => css`
        color: #f74b4b;
    `,
}

export const Label = styled.label`
    ${({ isActive, isError }) => css`
        color: #7f818a;
        ${isActive && labelModifiers.active()}
        ${isError && labelModifiers.error()}
    `}
`;

const borderModifiers = {
    active: () => css`
        border: 2px solid #1e84df;
    `,
    error: () => css`
        border: 2px solid #f74b4b
    `,

}

export const Container = styled.div`
    padding: 10px 15px;
    margin: 30px 0px;
    display: flex;
    background-color: #323644;
    border-radius: 15px;
    flex-direction: column;
    ${({ isActive, isError }) => css`
        border: 2px solid hsla(0, 0%, 0%, 0);
        ${isActive && borderModifiers.active()}
        ${isError && borderModifiers.error()}
    `}
    ${({ isActive }) => isActive && css`
        -webkit-box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
        box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
    `}
`
