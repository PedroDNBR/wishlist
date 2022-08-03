import { AuthAccountSpanTitle, AuthAccountLink } from "./style";


export function AuthAccountSpan({ content, link, linkTitle }) {
    return <>
        <AuthAccountSpanTitle>
            {content}
            <AuthAccountLink href={link}>
                {linkTitle}
            </AuthAccountLink>
        </AuthAccountSpanTitle>
    </>
}
