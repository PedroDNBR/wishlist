import { HexColorPicker } from "react-colorful";
import styled from "styled-components";

export const CategoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CategoryFormLayout = styled.div`
  display: flex;
  padding: 3rem;
  padding-top: 6rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  form {
    width: 100%;
  }
`;

export const CategoryForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 18.625rem;
`;

export const CategoryListingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 60%;
  flex-wrap: wrap;
  align-self: center;
`;

export const SearchCategoryForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 60%;
  flex-wrap: wrap;
  align-self: center;
`;