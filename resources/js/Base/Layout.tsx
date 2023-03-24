import { Container, Content, MenuDark } from "./style";
import { ReactNode, useState } from "react";
import { User } from "@/Types/User";
import { MenuMobileComponent } from "@/Components/Menus/Mobile";
import { MenuDesktopComponent } from "@/Components/Menus/Desktop";
import { router } from "@inertiajs/react";

interface LayoutProps {
  children: ReactNode;
  user: User;
}

export function Layout({ children, user }: LayoutProps) {
  const [ visible, setVisible ] = useState<string>('hidden');

  function logout() {
    router.delete('/users/logout')
  }

  return (
    <>
      <Container>
        <MenuDark visible={visible} />
        <MenuMobileComponent user={user} logout={logout} />
        <MenuDesktopComponent user={user} setVisible={setVisible} logout={logout} />
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
