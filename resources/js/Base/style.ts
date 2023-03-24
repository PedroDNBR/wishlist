import styled, { css, DefaultTheme } from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdLogout } from "react-icons/md";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
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

interface DropdownContentProps {
  theme: DefaultTheme;
  items: 'start' | 'end';
}

export const DropdownContent = styled(DropdownMenu.Content)`
  ${({ theme, items }: DropdownContentProps) => css`
    margin-top: .5rem;
    width: 100vw !important;
    background: ${theme.grey[500]};
    border: 1px solid ${theme.grey[600]};
    border-radius: 0px 0px 15px 15px;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    align-items: ${items};
    flex-direction: column;
  `}
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