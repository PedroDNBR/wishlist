import { Container, Menu, Content, LogoW, LogoL, Icon, ProfileImageContainer, ProfileImage } from "./style";
import { MdLabel, MdOutlineAddCircle } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';
import { Inertia } from "@inertiajs/inertia";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {

  function redirectToPage(url: string) {
    Inertia.get(url);
  }

  return (
    <>
      <Container>
        <Menu>
        <a href='/wishes'><LogoW>W<LogoL>L</LogoL></LogoW></a>
          <div>
            <a href='/wishes'><Icon><FaShoppingBasket /></Icon></a>
            <a href='/categories'><Icon><MdLabel /></Icon></a>
            <a href='/create-product'><Icon><MdOutlineAddCircle /></Icon></a>
          </div>
          <ProfileImageContainer>
            <ProfileImage src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg" />
          </ProfileImageContainer>
        </Menu>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
