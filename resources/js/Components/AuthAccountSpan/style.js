import styled, { css } from "styled-components";

export const AuthAccountSpanTitle = styled.span`
	${({ theme }) => css`
		color: ${theme.white[300]};
	`}
`;

export const AuthAccountLink = styled.a`
	${({ theme }) => css`
		color: ${theme.blue};
	`}
`;
