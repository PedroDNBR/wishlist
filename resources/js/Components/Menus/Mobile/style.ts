import styled, { css, DefaultTheme } from "styled-components";

export const MobileLinks = styled.a`
  width: fit-content;
`;

interface MobileIconProps {
  direction: 'right' | 'left';
  theme: DefaultTheme;
}

export const MobileIcon = styled.span`
  ${({ theme, direction }: MobileIconProps) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.white[100]};
    font-size: 1.25rem;
    padding-block: .2rem;
    cursor: pointer;

    ${direction === 'right' && css`
      margin-right: 1rem;

      svg {
        margin-left: 1rem;
      }
    `}

    ${direction === 'left' && css`
      margin-left: 1rem;

      svg {
        margin-right: 1rem;
      }
    `}
    
	`};
`;

export const MenuMobile = styled.section`
	${({ theme }) => css`
    display: none;
    @media (max-width: 1024px) {
      display: flex;
    }
    position: fixed;
    width: 100%;
    height: 4rem;
    background: ${theme.grey[500]};
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    border-bottom: 1px solid ${theme.grey[600]};
	`};
`;
