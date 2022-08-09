import React from "react";
import { Content, Overlay } from "./styles";

export function Modal({ children, closeModal }) {
  return (
    <Overlay>
      <Content onPointerDownOutside={() => {
        closeModal()
      }}
        onEscapeKeyDown={() => {
          closeModal()
        }}>
        {children}
      </Content>
    </Overlay>
  )
}