import { ReactNode } from "react";
import { Content, Portal } from "./styles";

interface DropdownProps {
  children: ReactNode; 
  align: "center" | "start" | "end" | undefined;
  side: "top" | "right" | "bottom" | "left" | undefined;
}

export function Dropdown({ children, side, align }: DropdownProps) {
  return (
    <Portal>
      <Content side={side} align={align}>
        {children}
      </Content>
    </Portal>
  )
}