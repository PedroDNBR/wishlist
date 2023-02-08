import styled, { css } from "styled-components";
import { borderModifiers, InputStyleProps } from "../Input/style";
import { AiOutlineSearch } from 'react-icons/ai';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 30rem;
    border: 0px;
    outline: none;
    color: ${theme.white[100]};
    background-color: ${theme.grey[400]};
    padding: 0;

    @media (max-width: 1300px) {
      width: 10rem;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }

    &:focus {
      border-color: inherit;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  `};
`;

export const Container = styled.div<InputStyleProps>`
	${({ theme, isError }) => css`
		display: flex;
    flex-direction: row;
		padding: 10px 15px;
		background-color: ${theme.grey[450]};
		border-radius: 15px;
		border: 2px solid transparent;
    justify-content: center;
    align-items: center;
		${isError && borderModifiers.error(theme)}
    @media (max-width: 1024px) {
      width: 100%;
    }
	`} 
`;

export const SearchIcon = styled(AiOutlineSearch)`
${({ theme }) => css`
		color: ${theme.white[100]};
    font-size: 1.2rem;
	`} 
`;