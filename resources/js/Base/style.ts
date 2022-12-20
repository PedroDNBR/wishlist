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

export const LogoL = styled.span`
	${({ theme }) => css`
    color: ${theme.blue};
    font-family: 'Lemon';
    font-size: 1.8rem;
    margin-left: -10px;
	`};
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.white[100]};
    font-size: 2.18rem;
    padding: 2rem;
    cursor: pointer;
	`};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileImageContainer = styled.div`
   ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 2.8rem;
    height: 2.8rem;
    border: 2px solid ${theme.blue};
	`};
`;