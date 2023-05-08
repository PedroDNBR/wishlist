import { LandingPageContentItem } from "../LandingPageContentItem";
import { LandingPageItemsWrapper } from "./style";

export function LandingPageItemsContainer() {
  return (
    <>
      <LandingPageItemsWrapper>
        <LandingPageContentItem imageUrl='/assets/imgs/product-form-image.png'>
          With our easy-to-use platform, you can save any product you love, attach the store's URL where you found it, and even register the lowest price you've seen.
        </LandingPageContentItem>
        <LandingPageContentItem isVertical={true} imageUrl='/assets/imgs/phone.png'>
          And it's compatible with both desktop and mobile devices, so you can access your Wishlist from anywhere.
        </LandingPageContentItem>
        <LandingPageContentItem imageUrl='/assets/imgs/share-buttom.png'>
          With our sharing feature, you can easily share your Wishlist with others, making it the perfect tool for special occasions like birthdays, weddings, and holidays. 
        </LandingPageContentItem>
      </LandingPageItemsWrapper>
    </>
  )

}