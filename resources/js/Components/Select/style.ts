import styled, { css } from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect)`
  ${({ theme }) => css`
    color: ${theme.white[100]};
    width: 15rem;
    .react-select__single-value {
      color: ${theme.white[100]};
    }
    .react-select__control {
      color: ${theme.white[100]};
      padding: 5px;
      background-color: ${theme.grey[450]};
      border-radius: 15px;
      border: 2px solid transparent;
    }

    .react-select__menu{
      padding: 5px;
      background-color: ${theme.grey[450]};
      border-radius: 15px;
      border: 2px solid transparent;

      *::-webkit-scrollbar {
        width: 2px;
        height: 2px;
      }
      *::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      *::-webkit-scrollbar-thumb {
        background: ${theme.white[100]};
        border: 0px none #ffffff;
        border-radius: 50px;
      }
      *::-webkit-scrollbar-thumb:hover {
        background: ${theme.white[100]};
      }
      *::-webkit-scrollbar-thumb:active {
        background: #000000;
      }
      *::-webkit-scrollbar-track {
        background: #666666;
        border: 0px none ${theme.white[100]};
        border-radius: 50px;
      }
      *::-webkit-scrollbar-track:hover {
        background: #666666;
      }
      *::-webkit-scrollbar-track:active {
        background: #333333;
      }
      *::-webkit-scrollbar-corner {
        background: transparent;
      }
    }
    .react-select__option:not(:last-child) {
      margin-bottom: 10px;
    }

    .react-select__option--is-focused:active,
    .react-select__option--is-focused {
      background: ${theme.grey[300]};
    }

    .react-select__option:active,
    .react-select__option--is-selected,
    .react-select__option--is-selected:active {
      background: ${theme.grey[100]};
    }
    
    .react-select__multi-value {
      background: none;
    }

    .react-select__multi-value__label {
      color: ${theme.white[100]};
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
  `} 
`;