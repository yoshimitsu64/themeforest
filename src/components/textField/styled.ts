import styled from 'styled-components';

import { IProps } from './types';

export const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${({ theme }) => theme.sizes[0]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledTextFiedldTitle = styled.div<IProps>`
  font-size: ${({ theme }) => theme.typography.headLine.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.semiBold[0].fontWeight};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.space[0]}px;
  ${({ theme, error }) => {
    if (error) {
      return {
        color: theme.colors.error,
      };
    }
  }}
`;

export const StyledTextField = styled.input<IProps>`
  width: ${({ theme }) => theme.sizes[1]}%;
  font-size: ${({ theme }) => theme.typography.paragraph.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.semiBold[0].fontWeight};
  border: none;
  border-bottom: ${({ theme }) => theme.borders.border[1]};
  padding-top: ${({ theme }) => theme.space[0]}px;
  padding-bottom: ${({ theme }) => theme.space[0]}px;
  outline: none;
  border-color: ${({ theme }) => theme.colors.grey};
  ${({ theme, error }) => {
    if (error) {
      return {
        caretColor: theme.colors.error,
        borderColor: theme.colors.error,
      };
    }
  }}

  &:focus {
    caret-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
