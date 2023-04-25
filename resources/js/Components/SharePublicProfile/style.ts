import { MdIosShare } from "react-icons/md";
import styled, { css } from "styled-components";

export const SharePublicProfileContainer = styled.div`
  align-self: center;
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const MdIosShareInline = styled(MdIosShare)`
  display: inline-block;
  margin-bottom: .9rem;
`;

export const SharePublicProfileHeaderTitle = styled.h2`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: 2.5rem;
    color: ${theme.white[100]};
  `}
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;