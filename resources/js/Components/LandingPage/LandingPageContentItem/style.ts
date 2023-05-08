import styled, { css } from "styled-components";

interface LandingPageItemProps {
  isVertical: boolean;
}

export const LandingPageItem = styled.div`
  width: 450px;
  ${({isVertical}: LandingPageItemProps) => css`
    ${isVertical && css`width: 247px;`}  
  `}
  img {
    width: 100%;
    height: 320px;
    object-fit: contain;
  }
`;

export const LandingPageItemText = styled.p`
  ${({theme}) => css`
    color: ${theme.white[100]};
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
  `}
`;