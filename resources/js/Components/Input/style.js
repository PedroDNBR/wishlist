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

export const Label = styled.label`
    color: ${({isActive}) => isActive ? "#1e84df" : "#7f818a"};
`;

export const Container = styled.div`
    padding: 10px 15px;
    margin: 30px 0px;
    display: flex;
    background-color: #323644;
    border-radius: 15px;
    flex-direction: column;
    border: ${({isActive}) => isActive ? "2px solid #1e84df" : "2px solid rgba(0,0,0,0)"};
    ${({isActive}) => isActive && css`
        -webkit-box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
        box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
    `}
`
