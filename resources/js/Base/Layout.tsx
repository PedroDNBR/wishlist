import { Container, Content, MenuDark } from "./style";
import { ReactNode, useState } from "react";
import { User } from "@/Types/User";
import { MenuMobileComponent } from "@/Components/Menus/Mobile";
import { MenuDesktopComponent } from "@/Components/Menus/Desktop";

interface LayoutProps {
  children: ReactNode;
  user: User;
}

export function Layout({ children, user }: LayoutProps) {
  const [ visible, setVisible ] = useState<string>('hidden');

  return (
    <>
      <Container>
        <MenuDark visible={visible} />
        <MenuMobileComponent user={user} />
        <MenuDesktopComponent user={user} setVisible={setVisible} />
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}
