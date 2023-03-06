import styled, { css } from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const SearchButtonMobile = styled(DropdownMenu.Trigger)`
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 30px;

  ${({ theme }) => css`
    color: ${theme.white[100]};
    background: ${theme.grey[500]};
  `}

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SearchHeader = styled.section`
  ${({ theme }) => css`
    background: ${theme.grey[500]};
    border-radius: 30px;
    margin-block: 1.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `}

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const colorStyles = {
  control: (styles: any) => ({...styles, backgroundColor: 'white', boxShadow: "none"}),
  option: (styles: any, { data }: any) => {
    return {
      ...styles, 
      border: `1px solid ${data.color}`,
      borderRadius: "15px" 
    }
  },
  multiValue: (styles: any, {data}: any) => {
    return {
      ...styles,
      border: `1px solid ${data.color}`,
      color: data.color,
    }
  }
}

export const Content = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
  margin-top: .5rem;
    width: 95vw !important;
    background: ${theme.grey[500]};
    border: 1px solid ${theme.grey[600]};
    border-radius: 15px;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Portal = styled(DropdownMenu.Portal)`
  ${({ theme }) => css`
  `}
`;

export const Root = styled(DropdownMenu.Root)`
`;
