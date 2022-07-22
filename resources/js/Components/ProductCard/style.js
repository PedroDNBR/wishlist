import styled, { css } from "styled-components";


export const Card = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 15rem;
    background: ${theme.darkGray};
  `}
`;