import { LanguageText } from "@/Base/style";
import { Modal } from "@/Components/Modal";
import { CloseModal } from "@/Components/OpenImageModal/styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { MdLabel, MdOutlineAddCircle } from "react-icons/md";
import { BigProfileImageContainer, Icon, LogoL, Logout, LogoW, ProfileImage, ProfileImageContainer } from "../style";
import { MenuContent, MenuDesktop, MenuTitle } from "./style";
import { Container as DivContainer } from "@/Components/CategoryForm/styles";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuProps } from "../types";
import { LanguageModal } from "@/Components/LanguageModal";
import { LanguageModalTrigger } from "@/Components/LanguageModalTrigger";

interface MenuDesktopProps extends MenuProps {
  setVisible: (value: string) => void;
}

export function MenuDesktopComponent({ user, setVisible, logout }: MenuDesktopProps) {
  const [openModal, setOpenModal] = useState(false);

  const { t, i18n } = useTranslation();

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <MenuDesktop onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('hidden')}>
          <MenuContent>
            <a href='/wishes' style={{position: 'relative'}}><LogoW>W<LogoL>L</LogoL></LogoW> <MenuTitle style={{top: '20%', marginLeft: '1rem', fontSize: '2rem'}}>Wishlist</MenuTitle></a>
            <div>
              <a href='/wishes'><Icon><FaShoppingBasket /> <MenuTitle>{t('labels:my-list')}</MenuTitle></Icon></a>
              <a href='/categories'><Icon><MdLabel /> <MenuTitle>{t('labels:categories')}</MenuTitle></Icon></a>
              <a href='/create-product'><Icon><MdOutlineAddCircle /> <MenuTitle>{t('labels:create-product')}</MenuTitle></Icon></a>
            </div>
            <div>
              <div style={{position: 'relative'}}>
                <a href='/profile'>
                  <ProfileImageContainer>
                    <ProfileImage src={user.profile_picture} />
                  </ProfileImageContainer>
                </a>
                <MenuTitle style={{top: '30%'}}><a href='/profile'>{t('labels:profile')}</a> <Logout onClick={() => logout()}/></MenuTitle>
              </div>
              <div>
                <Dialog.Root open={openModal}>
                  <LanguageModalTrigger setOpenModal={setOpenModal} setVisible={setVisible} />
                  <LanguageModal closeModal={closeModal} />
                </Dialog.Root>
              </div>
            </div>
          </MenuContent>
        </MenuDesktop>
  )
}