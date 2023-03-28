import styled, { css } from "styled-components";

export const LanguageImageContainerMobile = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 1.4rem;
    height: 1.4rem;
    border: 2px solid ${theme.blue};
  `}
`

export const LanguageContainerDesktop = styled.div`
  position: relative;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LanguageContainerMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;