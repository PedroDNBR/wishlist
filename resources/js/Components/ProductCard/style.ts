import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    width: 18.625rem;
    height: 26.5rem;
    border-radius: 30px;
    background: ${theme.grey[500]};
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: .2rem;
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 15px;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    background: ${theme.grey[400]};
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 30px;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    text-align: left;
    color: ${theme.white[100]};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.white[100]};
    font-weight: 600;
    font-size: 1.33rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Price = styled.h4`
  ${({ theme }) => css`
    color: ${theme.white[100]};
    font-weight: normal;
    font-size: 1.16rem;
  `}
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;