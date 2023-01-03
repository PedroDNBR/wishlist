import { useTranslation } from "react-i18next";
import { AuthSubTitle, AuthTitle, AuthTitleSpan } from "./style";

interface AuthTitleComponentProps {
  children: string;
}

export function AuthTitleComponent({children}: AuthTitleComponentProps) {
  const { t } = useTranslation();
  return <>
    <AuthSubTitle>{t("titles:its-free")}</AuthSubTitle>
    <AuthTitle>{children}<AuthTitleSpan>.</AuthTitleSpan></AuthTitle>
  </>
}
