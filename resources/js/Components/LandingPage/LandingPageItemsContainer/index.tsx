import { LandingPageContentItem } from "../LandingPageContentItem";
import { LandingPageItemsWrapper } from "./style";
import { useTranslation } from "react-i18next";
import '@/i18n';

export function LandingPageItemsContainer() {
  const { t } = useTranslation();
  return (
    <>
      <LandingPageItemsWrapper>
        <LandingPageContentItem imageUrl='/assets/imgs/product-form-image.png'>
          {t('titles:wishlist-landing-page-item-product-form')}
        </LandingPageContentItem>
        <LandingPageContentItem isVertical={true} imageUrl='/assets/imgs/phone.png'>
          {t('titles:wishlist-landing-page-item-mobile')}
        </LandingPageContentItem>
        <LandingPageContentItem imageUrl='/assets/imgs/share-buttom.png'>
          {t('titles:wishlist-landing-page-item-share')}
        </LandingPageContentItem>
      </LandingPageItemsWrapper>
    </>
  )

}