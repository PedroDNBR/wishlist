import { Container, Menu, Content, LogoW, LogoL, Icon, ProfineImageContainer, ProfileImage } from "./style";
import { MdLabel } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Menu>
          <LogoW>W<LogoL>L</LogoL></LogoW>
          <div>
            <Icon><FaShoppingBasket /></Icon>
            <Icon><MdLabel /></Icon>
          </div>
          <ProfineImageContainer>
            <ProfileImage src="https://scontent.fccm4-1.fna.fbcdn.net/v/t39.30808-6/284475660_2604059716394010_3231961472765155768_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3BH8cc7QrIMAX8XjzM_&_nc_ht=scontent.fccm4-1.fna&oh=00_AT_Z5mKaxVic4RjZh6zPeH_zA82lzPBHUwc2rL6wjkEp7Q&oe=62E24448" />
          </ProfineImageContainer>
        </Menu>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
