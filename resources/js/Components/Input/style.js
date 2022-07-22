import styled, { css } from "styled-components";

export const Input = styled.input`
	${({ theme }) => css`
			border: 0px;
			color: ${theme.white};
			background-color: ${theme.darkGray};
			padding: 0;
			&:focus {
					border-color: inherit;
					-webkit-box-shadow: none;
					box-shadow: none;
			}
	`};
`;

const labelModifiers = {
	active: (theme) => css`
		color: ${theme.blue};
	`,
	error: (theme) => css`
		color: ${theme.red};
	`,
}

export const Label = styled.label`
	${({ isError, theme }) => css`
			color: ${theme.gray};
			${isError && labelModifiers.error(theme)}
	`}
`;

const borderModifiers = {
	active: (theme) => css`
		border: 2px solid ${theme.blue};
	`,
	error: (theme) => css`
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

export const Container = styled.div`
	${({ theme }) => css`
		padding: 10px 15px;
		display: flex;
		background-color: ${theme.darkGray};
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
		${({ isError, theme }) => css`
			${isError && borderModifiers.error(theme)}
		`} 
	`} 
`;
