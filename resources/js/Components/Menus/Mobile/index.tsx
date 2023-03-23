import { MdLabel, MdOutlineAddCircle } from 'react-icons/md';
import { FaBars, FaShoppingBasket } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '@/i18n';
import { LogoL, LogoW, MenuButton, ProfileImage, ProfileImageContainerMobile } from '../style';
import { MenuMobile, MobileIcon, MobileLinks } from './style';
import { DropdownContent } from '@/Base/style';
import { MenuProps } from '../types';

export function MenuMobileComponent({user}: MenuProps) {
  const { t } = useTranslation();

  return (
    <MenuMobile>
    <ProfileImageContainerMobile>
      <ProfileImage src={user.profile_picture} />
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
  )
}