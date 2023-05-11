import { ButtonComponent } from "@/Components/Button";
import { ButtonWrapper, HeaderContainer, HeaderSubTitle, HeaderSubTitleContainer, HeaderTitle, HeaderWrapper, LandingPageLogo } from "./style";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface LandingPageHeaderProps {
  start: () => void;
}

export function LandingPageHeader({ start }: LandingPageHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle>
            {t("titles:its-free")}
          </HeaderTitle>
          <LandingPageLogo src="/assets/imgs/logo-small.png" alt="Wishlist Logo" width='150' />
          <HeaderSubTitleContainer>
            <HeaderSubTitle>
              {t('titles:wishlist-landing-page-sub-title')}
            </HeaderSubTitle>
            <ButtonWrapper onClick={() => start()}>
              <ButtonComponent name={t('labels:start-now')} />
            </ButtonWrapper>
          </HeaderSubTitleContainer>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  )
}