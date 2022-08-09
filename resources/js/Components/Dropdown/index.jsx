import React from "react";
import { Content, Portal } from "./styles";

export function Dropdown({ children, side, align }) {
  return (
    <Portal>
      <Content side={side} align={align}>
        {children}
      </Content>
    </Portal>
  )
}