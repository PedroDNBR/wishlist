import { ReactNode } from "react";
import { Content, Overlay } from "./styles";

interface ModelProps {
  children: ReactNode;
  closeModal: () => void;
  rootProps?: {
    onOpenChange: (open: boolean) => void;
  };
}

export function Modal({ children, closeModal }: ModelProps) {
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