import styled, { css } from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.section`
	${({ theme }) => css`
    display: flex;
    position: fixed;
    width: 7.75rem;
    height: 100vh;
    background: ${theme.grey[500]};
    flex-direction: column;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
	`};
`;

export const Content = styled.article`
  display: flex;
  flex-direction: row;
  margin-left: 7.75rem;
  width: 100%;
`;

export const LogoW = styled.h3`
	${({ theme }) => css`
    color: ${theme.white[100]};
    font-family: 'Lemon';
    font-size: 3rem;
    display: flex;
    align-items: baseline;
	`};
`;

export const LogoL = styled.h3`
	${({ theme }) => css`
    color: ${theme.blue};
    font-family: 'Lemon';
    font-size: 1.8rem;
    margin-left: -10px;
	`};
`;