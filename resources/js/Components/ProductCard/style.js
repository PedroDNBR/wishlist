import styled, { css } from "styled-components";
import { readableColor } from 'polished'
import { ImCross } from 'react-icons/im';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 18.625rem;
    height: 25.875rem;
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
    height: 4rem;
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

export const CategoryBadge = styled.span`
  ${({ color, asButton }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    width: max-content;
    background: ${color};
    color: ${readableColor(color)};
    font-size: 0.875rem;
    padding: 2px 8px;
    border-radius: 15px;
    height: 1.35rem;
    position: relative;
    ${asButton && css`cursor: pointer;`}  
  `}
`;

export const BadgeBall = styled.span`
  ${({ color }) => css`
    background: ${readableColor(color)};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100px;
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.white[100]};
    border-radius: 1000px;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    right: 0;
    transform: translateY(-50%) translateX(50%);
  `}
`;

export const CrossIcon = styled(ImCross)`
 ${({ theme }) => css`
    color: ${theme.red};
    width: .7rem;
  `}
`;