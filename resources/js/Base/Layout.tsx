import { Container, Menu, Content, LogoW, LogoL, Icon, ProfileImageContainer, ProfileImage, MenuContent, MenuTitle, MenuDark, } from "./style";
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
          <MenuContent>
            <a href='/wishes' style={{position: 'relative'}}><LogoW>W<LogoL>L</LogoL></LogoW> <MenuTitle style={{top: '20%', marginLeft: '1rem', fontSize: '2rem'}}>Wishlist</MenuTitle></a>
            <div>
              <a href='/wishes'><Icon><FaShoppingBasket /> <MenuTitle>Lista de desejos</MenuTitle></Icon></a>
              <a href='/categories'><Icon><MdLabel /> <MenuTitle>Categorias</MenuTitle></Icon></a>
              <a href='/create-product'><Icon><MdOutlineAddCircle /> <MenuTitle>Cadastrar produto</MenuTitle></Icon></a>
            </div>
            <div style={{position: 'relative'}}>
              <ProfileImageContainer>
                <ProfileImage src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg" />
              </ProfileImageContainer>
              <MenuTitle style={{top: '30%'}}>Perfil</MenuTitle>
            </div>
          </MenuContent>
        </Menu>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
