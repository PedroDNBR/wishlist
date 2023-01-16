import { Container, Menu, Content, LogoW, LogoL, Icon, ProfileImageContainer, ProfileImage, MenuContent, MenuTitle, MenuDark, MenuDarkProps, MenuMobile, } from "./style";
import { MdLabel, MdOutlineAddCircle } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';
import { Inertia } from "@inertiajs/inertia";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  const [ visible, setVisible ] = useState<string>('hidden');

  function logout() {
    Inertia.delete('/users/logout')
  }
  

  return (
    <>
      <Container>
        <MenuDark visible={visible} />
        <MenuMobile />
        <Menu onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('hidden')}>
          <MenuContent>
            <a href='/wishes' style={{position: 'relative'}}><LogoW>W<LogoL>L</LogoL></LogoW> <MenuTitle style={{top: '20%', marginLeft: '1rem', fontSize: '2rem'}}>Wishlist</MenuTitle></a>
            <div>
              <a href='/wishes'><Icon><FaShoppingBasket /> <MenuTitle>{t('labels:my-list')}</MenuTitle></Icon></a>
              <a href='/categories'><Icon><MdLabel /> <MenuTitle>{t('labels:categories')}</MenuTitle></Icon></a>
              <a href='/create-product'><Icon><MdOutlineAddCircle /> <MenuTitle>{t('labels:create-product')}</MenuTitle></Icon></a>
            </div>
            <div style={{position: 'relative'}}>
              <ProfileImageContainer>
                <ProfileImage src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg" />
              </ProfileImageContainer>
              <MenuTitle style={{top: '30%'}}>{t('labels:profile')}</MenuTitle>
			        <button style={{position: 'absolute', left: '170%', top: '27%'}} onClick={logout}>{t('labels:logout')}</button>
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
