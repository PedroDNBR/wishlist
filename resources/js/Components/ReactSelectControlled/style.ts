import styled, { css } from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect)`
  ${({ theme }) => css`
    color: ${theme.white[100]};
    width: 100%;
    
    @media (max-width: 1024px) {
      width: 100%;
    }

    .react-select-categories__single-value {
      color: ${theme.white[100]};
    }

    .react-select-categories__control {
      color: ${theme.white[100]};
      background-color: transparent;
      border: 0;
      border-radius: 15px;
    }

    .react-select-categories__input {
      color: ${theme.white[100]} !important;
      &:focus {
        border-color: inherit !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
			}
    }

    .react-select-categories__menu{
      background-color: ${theme.grey[450]};

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
    .react-select-categories__option:not(:last-child) {
      margin-bottom: 10px;
    }

    .react-select__option--is-focused:active,
    .react-select__option--is-focused {
      background: ${theme.grey[300]};
    }

    .react-select-categories__option:active,
    .react-select-categories__option--is-selected,
    .react-select-categories__option--is-selected:active {
      background: ${theme.grey[100]};
    }
    
    .react-select-categories__multi-value {
      background: none;
    }

    .react-select-categories__multi-value__label {
      color: ${theme.white[100]};
      width: 4rem;
    }

    .react-select-categories__multi-value__remove {
      /* display: none; */
      /* width: 0px; */
    }

    .react-select-categories__indicator-separator {
      display: none;
    }

    .react-select-categories__value-container {
      padding: 0;
    }

    .react-select-categories__multi-value {
    }

    .react-select-categories__indicator {
      padding: 0;
    }

    .react-select-categories__option--is-focused:active,
    .react-select-categories__option--is-focused {
      background: ${theme.grey[300]};
      border-color: inherit;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  `} 
`;