import styled, { css } from "styled-components";

export const Button = styled.button`
	${({ theme }) => css`
        background: ${theme.blue};
        padding: 20px 70px;
        display: flex;
        border-radius: 30px;
        color: ${theme.white};
        text-align: center;
        justify-content: center;
    `}
`;
