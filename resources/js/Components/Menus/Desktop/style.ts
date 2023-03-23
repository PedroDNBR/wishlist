import styled, { css } from "styled-components";

export const MenuDesktop = styled.section`
	${({ theme }) => css`
    display: flex;
    position: fixed;
    width: 7.75rem;
    height: 100vh;
    background: ${theme.grey[500]};
    flex-direction: column;
    padding-block: 2rem;
    padding-inline: 0.5rem;
    justify-content: space-between;
    align-items: start;
    transition: .5s;

    border-right: 0px solid ${theme.grey[600]};


    :hover {
      width: 18rem;
      border-right: 2px solid ${theme.grey[600]};
    }

    &:hover ${MenuTitle} {
      overflow: hidden;
      width: 10rem;
    }
	`};
  z-index: 10;

  @media (max-width: 1024px) {
    display: none !important;
  }
`;


export const MenuContent = styled.section`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  `};
`;

export const MenuTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  width: 0rem;
  font-size: 1rem;
  left: 100%;
  ${({ theme }) => css`
    color: ${theme.white[100]};
  `}

  white-space:nowrap;
  overflow:hidden;

  -webkit-transition: width .25s ease-in-out;
  -moz-transition: width .25s ease-in-out;
  -o-transition: width .25s ease-in-out;
  transition: width .25s ease-in-out;
`;