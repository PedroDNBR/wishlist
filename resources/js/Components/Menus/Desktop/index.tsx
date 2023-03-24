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

interface MenuDesktopProps extends MenuProps {
  setVisible: (value: string) => void;
}

export function MenuDesktopComponent({ user, setVisible, logout }: MenuDesktopProps) {
  const [openModal, setOpenModal] = useState(false);

  const { t, i18n } = useTranslation();

  function closeModal() {
    setOpenModal(false);
  }

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
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
                  <Dialog.Trigger onClick={() => {setOpenModal(true); setVisible('hidden');} }>
                    <div style={{position: 'relative', marginTop: '2rem'}}>
                      <ProfileImageContainer>
                          {localStorage.getItem('i18nextLng') ?? 'en' === 'en' ? 
                            <ProfileImage src="/assets/imgs/us-uk.png" width="40" />
                          :
                            <ProfileImage src="/assets/imgs/br-pt.png" width="40" />
                          }
                      </ProfileImageContainer>
                      <MenuTitle style={{top: '30%'}}>{t('inputs:language')}</MenuTitle>
                    </div>
                  </Dialog.Trigger>
                  <Modal closeModal={closeModal}>
                    <CloseModal onClick={closeModal}>
                      <AiOutlineClose />
                    </CloseModal>
                    <DivContainer onClick={() => changeLanguage('pt-BR')} style={{cursor: 'pointer'}}>
                      <BigProfileImageContainer>
                        <img src="/assets/imgs/br-pt.png" alt={t('titles:portuguese') ?? 'language 1'} width="300" />
                      </BigProfileImageContainer>
                      <LanguageText>{t('titles:portuguese')}</LanguageText>
                    </DivContainer>
                    <DivContainer onClick={() => changeLanguage('en')} style={{cursor: 'pointer'}}>
                      <BigProfileImageContainer>
                        <img src="/assets/imgs/us-uk.png" alt={t('titles:english') ?? 'language 2'} width="300" />
                      </BigProfileImageContainer>
                      <LanguageText>{t('titles:english')}</LanguageText>
                    </DivContainer>
                  </Modal>
                </Dialog.Root>
              </div>
            </div>
          </MenuContent>
        </MenuDesktop>
  )
}