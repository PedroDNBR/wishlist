import { AuthAccountSpanTitle, AuthAccountLink } from "./style";

interface AuthAccountSpanProps {
    content: string;
    link: string;
    linkTitle: string;
}

export function AuthAccountSpan({ content, link, linkTitle }: AuthAccountSpanProps) {
    return <>
        <AuthAccountSpanTitle>
            {content}
            <AuthAccountLink href={link}>
                {linkTitle}
            </AuthAccountLink>
        </AuthAccountSpanTitle>
    </>
}
