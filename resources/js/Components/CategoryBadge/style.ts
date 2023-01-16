import styled, { css } from "styled-components";
import { readableColor } from 'polished'
import { ImCross } from 'react-icons/im';

interface CategoryBadgeProps {
  color: string;
  asButton?: boolean;
}

interface BadgeBallProps {
  color: string;
}

export const CategoryBadge = styled.span`
${({ color, asButton }: CategoryBadgeProps) => css`
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

  @media (max-width: 1024px) {
    font-size: .7rem;
    padding: 2px 4px;
  }
`}
`;

export const BadgeBall = styled.span`
${({ color }: BadgeBallProps) => css`
  background: ${readableColor(color)};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100px;

  @media (max-width: 1024px) {
    width: 0.3rem;
    height: 0.3rem;
  }
`}
`;

export const DeleteButton = styled.div`
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
  cursor: pointer;
`}
`;

export const CrossIcon = styled(ImCross)`
  ${({ theme }) => css`
    color: ${theme.red};
    width: .7rem;
  `}
`;

export const CategoryName = styled.span`
    max-width: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
`;