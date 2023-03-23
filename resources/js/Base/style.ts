import styled, { css } from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdLogout } from "react-icons/md";

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
	`};
  z-index: 10;

  @media (max-width: 1024px) {
    display: none !important;
  }
`;

export interface MenuDarkProps {
  visible: string | 'hidden' | 'visible';
}

export const MenuDark = styled.div`
  ${({ visible }: MenuDarkProps) => css`
    visibility: ${visible};
	`};
  opacity: .5;
  background: black;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
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

export const MenuTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  width: 100%;
  padding-inline: 3rem;

  @media (min-width: 1024px) {
    margin-left: 7.75rem;
  }

  @media (max-width: 1024px) {
    padding-inline: .7rem;
  }
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
  object-fit: cover;
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

export const ProfileImageContainerMobile = styled.div`
   ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid ${theme.blue};
	`};
`;

export const BigProfileImageContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 1000px;
    width: 15rem;
    height: 15rem;
    border: 2px solid ${theme.blue};
    position: relative;
  `};
`;

export const ProductsContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 49%);
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

export const MenuMobile = styled.section`
	${({ theme }) => css`
    display: none;
    @media (max-width: 1024px) {
      display: flex;
    }
    position: fixed;
    width: 100%;
    height: 4rem;
    background: ${theme.grey[500]};
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    border-bottom: 1px solid ${theme.grey[600]};
	`};
`;

export const MenuButton = styled(DropdownMenu.Trigger)`
  font-size: 1.5rem;
  padding: .5rem .7rem;
	${({ theme }) => css`
    background: ${theme.grey[400]};
    color: ${theme.white[100]};
	`};
  border-radius: 10px;
`;

export const DropdownContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    margin-top: .5rem;
    width: 100vw !important;
    background: ${theme.grey[500]};
    border: 1px solid ${theme.grey[600]};
    border-radius: 0px 0px 15px 15px;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    align-items: end;
    flex-direction: column;
  `}
`;

export const MobileIcon = styled.span`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.white[100]};
    font-size: 1.25rem;
    padding-block: .2rem;
    cursor: pointer;
    margin-right: 1rem;

    svg {
      margin-left: 1rem;
    }
	`};
`;

export const MobileLinks = styled.a`
  width: fit-content;
`;

export const Logout = styled(MdLogout)`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.red};
    cursor: pointer;
    font-weight: bold;
	`};
`;

export const LanguageText = styled.span`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.white[100]};
  font-size: 2.18rem;
  cursor: pointer;
`};
`;