import styled, { css } from "styled-components";

export const SearchHeader = styled.section`
  ${({ theme }) => css`
    background: ${theme.grey[500]};
    border-radius: 30px;
    margin-block: 1.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `}
`;