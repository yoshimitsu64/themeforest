import styled, { css } from 'styled-components';

import { fadeIn, fadeOut } from 'animation/faqs';

interface IProps {
  isShown: boolean | null;
}

export const StyledFaqCard = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding: ${({ theme }) => theme.space[3]}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  max-height: 70px;

  ${({ isShown }) => {
    if (isShown !== null) {
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
    }
  }}

  overflow-y: hidden;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const StyledIcon = styled.div`
  cursor: pointer;
  user-select: none;
`;
