import styled, { css } from "styled-components";

export const AuthTitle = styled.h1`
${({ theme }) => css`
		color: ${theme.white[100]};
		font-size: 4rem;
		font-weight: bold;
		transform: translateX(-2px);

		@media (max-width: 1024px) {
			font-size: 3rem;
		}
	`}
`;

export const AuthSubTitle = styled.h2`
	${({ theme }) => css`
		color: ${theme.white[300]};
		font-size: 1.5rem;
		font-weight: bold;
	`}
`;

export const AuthTitleSpan = styled.span`
${({ theme }) => css`
		color: ${theme.blue};
		font-size: 5.5rem;
		line-height: 4rem;

		@media (max-width: 1024px) {
			font-size: 4rem;
		}
	`}
`;


