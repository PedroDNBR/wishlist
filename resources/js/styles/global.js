import styled from "styled-components";

export const Form = styled.form`
    margin-top: 30px;
    width: 70%;
    display: flex;
    flex-direction: column;
`;

export const FluidContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #272a37;
    padding: 0 12.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        flex-direction: column;
        display: flex;
        width: 100%;
    }
`;

export const ImgAuth = styled.img`
`;
