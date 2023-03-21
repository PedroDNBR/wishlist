import { Container, Menu, Content, LogoW, LogoL, Icon, ProfileImageContainer, ProfileImage, MenuContent, MenuTitle, MenuDark, MenuDarkProps, MenuMobile, ProfileImageContainerMobile, MenuButton, DropdownContent, MobileIcon, MobileLinks, Logout } from "./style";
import { MdLabel, MdOutlineAddCircle } from 'react-icons/md';
import { FaBars, FaShoppingBasket } from 'react-icons/fa';
import { router } from '@inertiajs/react';
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '@/i18n';
import { User } from "@/Types/User";

interface LayoutProps {
  children: ReactNode;
  user: User;
}

export function Layout({ children, user }: LayoutProps) {
  const { t } = useTranslation();

  const [ visible, setVisible ] = useState<string>('hidden');

  function logout() {
    router.delete('/users/logout')
  }
  

  return (
    <>
      <Container>
        <MenuDark visible={visible} />
        <MenuMobile>
          <ProfileImageContainerMobile>
            <ProfileImage src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg" />
          </ProfileImageContainerMobile>
          <MobileLinks href='/wishes'><LogoW>W<LogoL>L</LogoL></LogoW></MobileLinks>
          <DropdownMenu.Root>
            <MenuButton><FaBars/></MenuButton>
            <DropdownMenu.Portal>
              <DropdownContent side="bottom" align="center">
                <MobileLinks href='/wishes'><MobileIcon>{t('labels:my-list')} <FaShoppingBasket /></MobileIcon></MobileLinks>
                <MobileLinks href='/categories'><MobileIcon>{t('labels:categories')} <MdLabel /></MobileIcon></MobileLinks>
                <MobileLinks href='/create-product'><MobileIcon>{t('labels:create-product')} <MdOutlineAddCircle /></MobileIcon></MobileLinks>
              </DropdownContent>
          </DropdownMenu.Portal>
          </DropdownMenu.Root>
          
        </MenuMobile>
        <Menu onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('hidden')}>
          <MenuContent>
            <a href='/wishes' style={{position: 'relative'}}><LogoW>W<LogoL>L</LogoL></LogoW> <MenuTitle style={{top: '20%', marginLeft: '1rem', fontSize: '2rem'}}>Wishlist</MenuTitle></a>
            <div>
              <a href='/wishes'><Icon><FaShoppingBasket /> <MenuTitle>{t('labels:my-list')}</MenuTitle></Icon></a>
              <a href='/categories'><Icon><MdLabel /> <MenuTitle>{t('labels:categories')}</MenuTitle></Icon></a>
              <a href='/create-product'><Icon><MdOutlineAddCircle /> <MenuTitle>{t('labels:create-product')}</MenuTitle></Icon></a>
            </div>
            <div style={{position: 'relative'}}>
              <a href='/profile'>
                <ProfileImageContainer>
                  <ProfileImage src={user.profile_picture} />
                </ProfileImageContainer>
              </a>
              <MenuTitle style={{top: '30%'}}><a href='/profile'>{t('labels:profile')}</a> <Logout onClick={() => logout()}/></MenuTitle>
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
