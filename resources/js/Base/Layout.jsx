import { Container } from "./style";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}
