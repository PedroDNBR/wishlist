import { Container, Menu, Content, LogoW, LogoL } from "./style";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Menu>
          <LogoW>W<LogoL>L</LogoL></LogoW>
          <div>
            <p>icon</p>
            <p>icon</p>
          </div>
          <span>foto</span>
        </Menu>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
