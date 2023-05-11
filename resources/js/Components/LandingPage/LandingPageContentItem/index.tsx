import { LandingPageItem, LandingPageItemText } from "./style";

interface LandingPageContentItemProps {
  children: string | JSX.Element | JSX.Element[] | DefaultTFuncReturn; 
  imageUrl: string;
  isVertical?: boolean;
}

export function LandingPageContentItem({ children, imageUrl, isVertical = false }: LandingPageContentItemProps) {
  return (
    <>
      <LandingPageItem isVertical={isVertical}>
        <img src={imageUrl}/>
        <div>
          <LandingPageItemText>
            {children}
          </LandingPageItemText>
        </div>
      </LandingPageItem>
    </>
  )
}