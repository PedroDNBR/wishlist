import { Modal } from "@/Components/Modal";
import { CloseModal } from "@/Components/OpenImageModal/styles";
import { AiOutlineClose } from "react-icons/ai";
import { Container as DivContainer } from "@/Components/CategoryForm/styles";
import '@/i18n';
import { BigProfileImageContainer } from "../Menus/style";
import { useTranslation } from "react-i18next";
import { LanguageText } from "@/Base/style";


interface LanguageModalProps {
  closeModal: () => void;
}

export function LanguageModal({ closeModal }: LanguageModalProps) {
  const { t, i18n } = useTranslation();
  
  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
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
  )
}

