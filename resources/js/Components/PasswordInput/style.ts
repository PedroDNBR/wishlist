import { MdRemoveRedEye } from "react-icons/md";
import styled, { css, DefaultTheme } from "styled-components";

export const Input = styled.input`
	${({ theme }) => css`
      width: 100%;
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

interface EyeIconProps {
  theme: DefaultTheme;
  changeColor: string;
}

export const EyeIcon = styled(MdRemoveRedEye)`
  ${({ theme, changeColor }: EyeIconProps) => css`
    font-size: 1.5rem;
    cursor: pointer;

    ${changeColor === 'text' ? 
			css`
    		color: ${theme.blue};
			` 
			: 
			css`
    		color: ${theme.white[100]};
			` 
		}
	`};
`

export const InputWrapper = styled.div`
  display: flex;
`;