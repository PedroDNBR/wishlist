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
	${({ isError }) => css`
			color: #7f818a;
			${isError && labelModifiers.error()}
	`}
`;

const borderModifiers = {
	active: () => css`
		border: 2px solid #1e84df;
    `,
	error: () => css`
		border: 2px solid #f74b4b;
    `,
}

export const Error = styled.span`
	color: #f74b4b;
	min-height: 1.5rem;
	font-size: .9rem;
	margin-bottom: 5px;
	margin-top: 2px;
	padding-left: 15px;
`;

export const Container = styled.div`
	padding: 10px 15px;
	display: flex;
	background-color: #323644;
	border-radius: 15px;
	flex-direction: column;
	border: 2px solid transparent;
	&:focus-within {
		${Label} {
			${labelModifiers.active()}
		}
		border: 2px solid #1e84df;
		-webkit-box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
		box-shadow: 0px 0px 0px 2px rgba(30,132,223,0.2);
	}
	${({ isError }) => css`
		${isError && borderModifiers.error()}
	`} 
`
