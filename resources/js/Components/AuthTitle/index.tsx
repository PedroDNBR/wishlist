import { AuthSubTitle, AuthTitle, AuthTitleSpan } from "./style";

interface AuthTitleComponentProps {
  children: string;
}

export function AuthTitleComponent({children}: AuthTitleComponentProps) {
  return <>
    <AuthSubTitle>Start for free</AuthSubTitle>
    <AuthTitle>{children}<AuthTitleSpan>.</AuthTitleSpan></AuthTitle>
  </>
}
