import { ProfileImage, ProfileImageContainer } from "../Menus/style";
import * as Dialog from '@radix-ui/react-dialog';
import { MenuTitle } from "../Menus/Desktop/style";
import { useTranslation } from "react-i18next";
import { MobileIcon, MobileLinks } from "../Menus/Mobile/style";
import { LanguageContainerDesktop, LanguageContainerMobile, LanguageImageContainerMobile } from "./style";

interface LanguageModalTrigger {
  setOpenModal: (value: boolean) => void;
  setVisible?: (value: string) => void;
}

export function LanguageModalTrigger({ setOpenModal, setVisible }: LanguageModalTrigger) {
  const { t, i18n } = useTranslation();

  function openModal() {
    setOpenModal(true); 
    if(setVisible) setVisible('hidden');
  }

  return (
    <Dialog.Trigger onClick={ () => { openModal() }}>
      <LanguageContainerDesktop>
        <ProfileImageContainer>
            {localStorage.getItem('i18nextLng') == 'en' ? 
              <ProfileImage src="/assets/imgs/us-uk.png" width="40" />
            :
              <ProfileImage src="/assets/imgs/br-pt.png" width="40" />
            }
        </ProfileImageContainer>
        <MenuTitle style={{top: '30%'}}>{t('inputs:language')}</MenuTitle>
      </LanguageContainerDesktop>

      <LanguageContainerMobile>
        <MobileLinks>
          <MobileIcon direction='left'>
            <LanguageImageContainerMobile>
              {localStorage.getItem('i18nextLng') == 'en' ? 
                <ProfileImage src="/assets/imgs/us-uk.png" />
              :
                <ProfileImage src="/assets/imgs/br-pt.png" />
              }
            </LanguageImageContainerMobile>
            {t('inputs:language')}
          </MobileIcon>
        </MobileLinks>
      </LanguageContainerMobile>
    </Dialog.Trigger>
  )
}