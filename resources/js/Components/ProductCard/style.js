import styled, { css } from "styled-components";


export const Card = styled.div`
  ${({ theme }) => css`
    width: 18.625rem;
    height: 25.875rem;
    border-radius: 30px;
    background: ${theme.darkGray};
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: .2rem;
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 15px;
    width: 17rem;
    height: 17rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    background: ${theme.halfLightGray};
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 30px;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    text-align: left;
    color: ${theme.white};
    height: 4rem;
  `}
`;


export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.white};
    font-weight: 600;
    font-size: 1.33rem;
  `}
`;

export const Price = styled.h4`
  ${({ theme }) => css`
    color: ${theme.white};
    font-weight: normal;
    font-size: 1.16rem;
  `}
`;

export const CategoryBadge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    width: max-content;
    background: ${theme.red};
    color: ${theme.white};
    font-size: 0.875rem;
    padding: 2px 8px;
    border-radius: 15px;
  `}
`;
export const BadgeBall = styled.span`
  ${({ theme }) => css`
    background: ${theme.white};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100px;
  `}
`;
