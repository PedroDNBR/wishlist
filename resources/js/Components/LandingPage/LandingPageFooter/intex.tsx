import { ButtonComponent } from "@/Components/Button";
import { ButtonWrapper, LandingPageLogo } from "../LandingPageHeader/style";
import { FooterContainer, FooterText } from "./style";

interface LandingPageHeaderProps {
  start: () => void;
}

export function LandingPageFooter({ start }: LandingPageHeaderProps) {

  return (
    <FooterContainer>
      <FooterText>
        Our website is completely free to use, so start creating your Wishlist today and never miss out on your must-have products again!
      </FooterText>
      <ButtonWrapper onClick={() => start()}>
        <ButtonComponent name='Start now!' />
      </ButtonWrapper>
      <LandingPageLogo src="/assets/imgs/logo-small.png" alt="Wishlist Logo" width='130' />
    </FooterContainer>
  )
} 