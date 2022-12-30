import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.section`
	${({ theme }) => css`
    display: flex;
    position: fixed;
    width: 7.75rem;
    height: 100vh;
    background: ${theme.grey[500]};
    flex-direction: column;
    padding-block: 2rem;
    padding-inline: 0.5rem;
    justify-content: space-between;
    align-items: start;
    transition: .5s;

    border-right: 0px solid ${theme.grey[600]};


    :hover {
      width: 18rem;
      border-right: 2px solid ${theme.grey[600]};
    }

    &:hover ${MenuTitle} {
      overflow: hidden;
      width: 10rem;
    }

    &:hover ${MenuDark} {
      visibility: visible;
    }
	`};
  z-index: 10;
`;

export const MenuContent = styled.section`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  `};
`;

export const MenuDark = styled.div`
  visibility: visible;
  opacity: .5;
  background: black;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
`

export const MenuTitle = styled.span`
  display: inline-block;
  position: absolute;
  width: 0rem;
  font-size: 1rem;
  left: 100%;
  ${({ theme }) => css`
    color: ${theme.white[100]};
  `}

  white-space:nowrap;
  overflow:hidden;

  -webkit-transition: width .25s ease-in-out;
  -moz-transition: width .25s ease-in-out;
  -o-transition: width .25s ease-in-out;
  transition: width .25s ease-in-out;


`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 7.75rem;
  width: 100%;
  padding-inline: 3rem;
  
`;

export const LogoW = styled.h3`
	${({ theme }) => css`
    color: ${theme.white[100]};
    font-family: 'Lemon';
    font-size: 3rem;
    display: flex;
    align-items: baseline;
	`};
`;

export const LogoL = styled.span`
	${({ theme }) => css`
    color: ${theme.blue};
    font-family: 'Lemon';
    font-size: 1.8rem;
    margin-left: -10px;
	`};
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.white[100]};
    font-size: 2.18rem;
    padding: 2rem;
    cursor: pointer;
	`};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileImageContainer = styled.div`
   ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 2.8rem;
    height: 2.8rem;
    border: 2px solid ${theme.blue};
    margin-inline: 2rem;
	`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 18.625rem);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 18.625rem);
  }

  @media (min-width: 1131px) {
    grid-template-columns: repeat(3, 18.625rem);
  }

  @media (min-width: 1450px) {
    grid-template-columns: repeat(4, 18.625rem);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 18.625rem);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 18.625rem);
  }
  justify-content: space-between;
`;