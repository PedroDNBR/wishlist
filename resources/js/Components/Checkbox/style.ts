import styled, { css } from "styled-components";

export const Checkbox = styled.div`
  ${({ theme }) => css`

    margin-bottom: 1.5rem;
  
    span {
      color: ${theme.white[100]};
    }

    .b-contain *,
    .b-contain *::before,
    .b-contain *::after {
      box-sizing: content-box !important;
      border-radius: 5px;
    }

    .b-contain input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      border-radius: 5px;
    }

    .b-contain span {
      line-height: 1.5;
      font-size: 1rem;
      font-family: inherit;
    }

    .b-contain {
      display: table;
      position: relative;
      padding-left: 2rem;
      cursor: pointer;
      margin-bottom: 0.4rem;
    }

    .b-contain input[type="checkbox"] ~ .b-input {
      position: absolute;
      top: 0;
      left: 0;
      height: 1.5rem;
      width: 1.5rem;
      background: #323644;
      transition: background 250ms;
      border: 1px solid #323644;
      border-radius: 0.2rem;
      border-radius: 5px;
    }

    .b-contain input[type="radio"] ~ .b-input {
      position: absolute;
      top: 0;
      left: 0;
      height: 1.5rem;
      width: 1.5rem;
      background: #323644;
      transition: background 250ms;
      border: 1px solid #323644;
      border-radius: 3rem;
    }

    .b-contain input[type="checkbox"] ~ .b-input::after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 0.3rem;
      height: 0.6rem;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transition: background 250ms;
      transform: rotate(45deg);
    }

    .b-contain input[type="radio"] ~ .b-input::after {
      content: "";
      position: absolute;
      display: none;
      left: 4px;
      top: 5px;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 3rem;
      background: #ffffff;
      transition: background 250ms;
    }

    .b-contain input[type="checkbox"]:disabled ~ .b-input::after {
      border-color: #ffffff;
    }

    .b-contain input:checked ~ .b-input::after {
      display: block;
    }

    .b-contain:hover input[type="checkbox"]:not([disabled]) ~ .b-input,
    .b-contain input[type="checkbox"]:focus ~ .b-input {
      background: ${theme.grey[450]};
      border-color: rgba(0, 0, 0, 0);
    }

    .b-contain:hover input[type="radio"]:not([disabled]) ~ .b-input,
    .b-contain input[type="radio"]:focus ~ .b-input {
      background: #323644;
      border-color: #323644;
    }

    .b-contain input:focus ~ .b-input {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0);
    }

    .b-contain input[type="checkbox"]:checked ~ .b-input {
      background: #323644;
      border-color: rgb(31, 135, 232);
    }

    .b-contain input[type="radio"]:checked ~ .b-input {
      background: #323644;
      border-color: #323644;
    }

    .b-contain input[type="checkbox"]:disabled ~ .b-input,
    .b-contain input[type="radio"]:disabled ~ .b-input {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .b-contain input[type="radio"]:disabled ~ .b-input::after {
      background: #ffffff;
    }

    .b-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .b-input,
    .b-contain input[type="checkbox"]:checked:focus ~ .b-input {
      background: #323644;
      border-color: rgb(31, 135, 232);
    }

    .b-contain:hover input[type="radio"]:not([disabled]):checked ~ .b-input,
    .b-contain input[type="radio"]:checked:focus ~ .b-input {
      background: #323644;
      border-color: #323644;
    }

  `}
`;