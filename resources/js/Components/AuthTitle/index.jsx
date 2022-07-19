import { AuthSubTitle, AuthTitle, AuthTitleSpan } from "./style";

export function AuthTitleComponent({children}) {
    return <>
            <AuthSubTitle>Start for free</AuthSubTitle>
            <AuthTitle>{children}<AuthTitleSpan>.</AuthTitleSpan></AuthTitle>
        </>
}
