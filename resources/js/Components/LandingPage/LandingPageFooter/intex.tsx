import { ButtonComponent } from "@/Components/Button";
import { ButtonWrapper, LandingPageLogo } from "../LandingPageHeader/style";
import { FooterContainer, FooterText } from "./style";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface LandingPageHeaderProps {
  start: () => void;
}

export function LandingPageFooter({ start }: LandingPageHeaderProps) {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterText>
        {t('titles:wishlist-landing-page-footer')}
      </FooterText>
      <ButtonWrapper onClick={() => start()}>
        <ButtonComponent name={t('labels:start-now')} />
      </ButtonWrapper>
      <LandingPageLogo src="/assets/imgs/logo-small.png" alt="Wishlist Logo" width='130' />
    </FooterContainer>
  )
} 