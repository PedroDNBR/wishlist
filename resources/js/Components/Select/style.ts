import styled, { css } from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect)`
  ${({ theme }) => css`
    color: ${theme.white[100]};
  `} 
  width: 15rem;
  .react-select__single-value {
    ${({ theme }) => css`
    color: ${theme.white[100]};
  `} 
  }
  .react-select__control {
    ${({ theme }) => css`
    color: ${theme.white[100]};
		padding: 5px;
		background-color: ${theme.grey[450]};
		border-radius: 15px;
		border: 2px solid transparent;
	`} 
  }

  .react-select__menu{
    ${({ theme }) => css`
        padding: 5px;
        background-color: ${theme.grey[450]};
        border-radius: 15px;
        border: 2px solid transparent;
      `} 
    }
    .react-select__option:active,
    .react-select__option--is-focused, 
    .react-select__option--is-focused:active,
    .react-select__option--is-selected,
    .react-select__option--is-selected:active {
      ${({ theme }) => css`
        border-radius: 15px;
        background-color: ${theme.grey[500]};
      `} 
    }

    .react-select__multi-value {
      background: none;

    }

    .react-select__multi-value__label {
      ${({ theme }) => css`
        color: ${theme.white[100]};
      `} 
    }

    .react-select__multi-value__remove {
      display: none;
      width: 0px;
    }

    .react-select__value-container{
      flex-wrap: nowrap !important;
    }

    .react-select__multi-value{
      min-width: 40% !important;
    }
`;