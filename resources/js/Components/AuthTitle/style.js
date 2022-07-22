import styled, { css } from "styled-components";

export const AuthTitle = styled.h1`
${({ theme }) => css`
		color: ${theme.white};
		font-size: 4rem;
		font-weight: bold;
		transform: translateX(-2px);
	`}
`;

export const AuthSubTitle = styled.h2`
	${({ theme }) => css`
		color: ${theme.lightGray};
		font-size: 1.5rem;
		font-weight: bold;
	`}
`;

export const AuthTitleSpan = styled.span`
${({ theme }) => css`
		color: ${theme.blue};
		font-size: 5.5rem;
		line-height: 4rem;
	`}
`;


