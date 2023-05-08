import styled, { css } from "styled-components";


export const HeaderContainer = styled.section`
  background: url('/assets/imgs/cover.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.article`
  width: 70%;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  ${({theme}) => css`
    margin-top: 3rem;
    color: ${theme.white[100]};
    font-size: 2.5rem;
    font-weight: 600;
  `}
`;

export const HeaderSubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const HeaderSubTitle = styled.h2`
  ${({theme}) => css`
    color: ${theme.white[100]};
    font-weight: 500;
    font-size: 2rem;
    width: 80%;
    margin-bottom: 2rem;
  `}
`;

export const ButtonWrapper = styled.div`
  width: 30%;
  font-size: 1.5rem;
`; 

export const LandingPageLogo = styled.img`
  display: flex;
  align-self: center;
`;