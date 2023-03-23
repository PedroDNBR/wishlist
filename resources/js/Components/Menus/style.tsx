import styled, { css } from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdLogout } from "react-icons/md";

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

export const MenuButton = styled(DropdownMenu.Trigger)`
  font-size: 1.5rem;
  padding: .5rem .7rem;
	${({ theme }) => css`
    background: ${theme.grey[400]};
    color: ${theme.white[100]};
	`};
  border-radius: 10px;
`;

export const Logout = styled(MdLogout)`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.red};
    cursor: pointer;
    font-weight: bold;
	`};
`;

export const ProfileImageContainer = styled.div`
   ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 2.8rem;
    height: 2.8rem;
    border: 2px solid ${theme.blue};
    margin-inline: 2rem;
	`};
`;

export const ProfileImageContainerMobile = styled.div`
   ${({ theme }) => css`
    overflow: hidden;
    border-radius: 100px;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid ${theme.blue};
	`};
`;

export const BigProfileImageContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 1000px;
    width: 15rem;
    height: 15rem;
    border: 2px solid ${theme.blue};
    position: relative;
  `};
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    position: relative;
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
  object-fit: cover;
`;