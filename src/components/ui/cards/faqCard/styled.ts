import styled, { css } from 'styled-components';

import { fadeIn, fadeOut } from 'animation/faqs';

interface IProps {
  isShown: boolean;
}

export const StyledFaqCard = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  min-height: 70px;
  ${({ isShown }) => {
    if (isShown) {
      return css`
        animation: ${fadeIn} 0.7s;
        animation-fill-mode: forwards;
      `;
    }
    return css`
      animation: ${fadeOut} 0.8s;
      animation-fill-mode: forwards;
    `;
  }};
  overflow-y: hidden;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1] - 10}%;
  overflow-y: hidden;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[0].fontWeight};
  color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  cursor: pointer;
`;

export const StyledSubtitle = styled.div<IProps>`
  height: max-content;
  margin-top: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  user-select: none;
`;
