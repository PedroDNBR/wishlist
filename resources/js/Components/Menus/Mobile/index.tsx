import { MdLabel, MdOutlineAddCircle, MdPerson2 } from "react-icons/md";
import { FaBars, FaShoppingBasket } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '@/i18n';
import { LogoL, Logout, LogoW, MenuButton, ProfileImage, ProfileImageContainerMobile } from '../style';
import { MenuMobile, MobileIcon, MobileLinks } from './style';
import { DropdownContent } from '@/Base/style';
import { MenuProps } from '../types';

export function MenuMobileComponent({ user, logout}: MenuProps) {
  const { t } = useTranslation();

  return (
    <MenuMobile>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <ProfileImageContainerMobile>
          <ProfileImage src={user.profile_picture} />
        </ProfileImageContainerMobile>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownContent side="bottom" align="center" items="start">
          <MobileLinks href='/profile'><MobileIcon direction='left' ><MdPerson2 /> {t('labels:profile')}</MobileIcon></MobileLinks>
          <MobileLinks onClick={() => logout()}><MobileIcon direction='left'><Logout /> {t('labels:logout')}</MobileIcon></MobileLinks>
        </DropdownContent>
    </DropdownMenu.Portal>
    </DropdownMenu.Root>

    <MobileLinks href='/wishes'><LogoW>W<LogoL>L</LogoL></LogoW></MobileLinks>
    <DropdownMenu.Root>
      <MenuButton><FaBars/></MenuButton>
      <DropdownMenu.Portal>
        <DropdownContent side="bottom" align="center" items="end">
          <MobileLinks href='/wishes'><MobileIcon direction='right'>{t('labels:my-list')} <FaShoppingBasket /></MobileIcon></MobileLinks>
          <MobileLinks href='/categories'><MobileIcon direction='right'>{t('labels:categories')} <MdLabel /></MobileIcon></MobileLinks>
          <MobileLinks href='/create-product'><MobileIcon direction='right'>{t('labels:create-product')} <MdOutlineAddCircle /></MobileIcon></MobileLinks>
        </DropdownContent>
    </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </MenuMobile>
  )
}