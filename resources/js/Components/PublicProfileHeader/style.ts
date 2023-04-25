import styled, { css } from "styled-components";


export const PublicProfileHeaderContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.grey[500]};
    border-radius: 30px;
    margin-bottom: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  `}
`;

export const PublicProfileHeaderTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.white[100]};
  `}
  @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
`;

export const PublicProfileHeaderItem = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.white[300]};

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  `}
`;