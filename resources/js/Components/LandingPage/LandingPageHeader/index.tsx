import { ButtonComponent } from "@/Components/Button";
import { ButtonWrapper, HeaderContainer, HeaderSubTitle, HeaderSubTitleContainer, HeaderTitle, HeaderWrapper, LandingPageLogo } from "./style";

interface LandingPageHeaderProps {
  start: () => void;
}

export function LandingPageHeader({ start }: LandingPageHeaderProps) {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle>
            Create your dream Wishlist and never miss out on your favorite products again!
          </HeaderTitle>

          <LandingPageLogo src="/assets/imgs/logo-small.png" alt="Wishlist Logo" width='150' />

          <HeaderSubTitleContainer>
            <HeaderSubTitle>
              Whether you're shopping for yourself or sharing with friends and family, our Wishlist website makes it easy to keep track of everything you want.
            </HeaderSubTitle>
            <ButtonWrapper onClick={() => start()}>
              <ButtonComponent name='Start now!' />
            </ButtonWrapper>

          </HeaderSubTitleContainer>
         
        </HeaderWrapper>
      </HeaderContainer>
    </>
  )
}