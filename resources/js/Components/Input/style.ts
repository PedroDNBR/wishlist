import styled, { css, DefaultTheme } from "styled-components";

export interface InputStyleProps {
	isError: boolean;
	theme: DefaultTheme;
}

export const Input = styled.input`
	${({ theme }) => css`
			border: 0px;
			outline: none;
			color: ${theme.white[100]};
			background-color: ${theme.grey[500]};
			padding: 0;
			&:focus {
					border-color: inherit;
					-webkit-box-shadow: none;
					box-shadow: none;
			}
	`};
`;

const labelModifiers = {
	active: (theme: DefaultTheme) => css`
		color: ${theme.blue};
	`,
	error: (theme: DefaultTheme) => css`
		color: ${theme.red};
	`,
}

export const Label = styled.label`
	${({ isError, theme }: InputStyleProps) => css`
			color: ${theme.grey[100]};
			${isError && labelModifiers.error(theme)}
	`}
`;

export const borderModifiers = {
	active: (theme: DefaultTheme) => css`
		border: 2px solid ${theme.blue};
	`,
	error: (theme: DefaultTheme) => css`
		border: 2px solid ${theme.red};
	`,
}

export const Error = styled.span`
${({ theme }) => css`
		color: ${theme.red};
		min-height: 1.5rem;
		font-size: .9rem;
		margin-bottom: 5px;
		margin-top: 2px;
		padding-left: 15px;
	`}
`;
export const Container = styled.div<InputStyleProps>`
	${({ theme, isError }) => css`
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
		${isError && borderModifiers.error(theme)}
	`} 
`;
