import styled, { css } from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  gap: 2rem;
`;

export const FooterText = styled.h3`
  ${({theme}) => css`
    width: 55%;
    color: ${theme.white[100]};
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
  `}
`;