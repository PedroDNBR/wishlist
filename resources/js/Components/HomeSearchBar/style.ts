import styled, { css } from "styled-components";

export const SearchHeader = styled.section`
  ${({ theme }) => css`
    background: ${theme.grey[500]};
    width: 100%;
    height: 1rem;
  `}
`;