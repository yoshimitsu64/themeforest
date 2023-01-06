import styled from 'styled-components';

import { IProps } from './types';

export const StyledSubtitle = styled.p<Omit<IProps, 'children'>>`
  max-width: ${({ theme }) => theme.sizes[7]}px;
  font-size: ${({ theme, variant, size }) => theme.typography.paragraph[variant][size].size}px;
  font-weight: ${({ theme, variant, size }) =>
    theme.typography.paragraph[variant][size].fontWeight};
  line-height: ${({ theme, variant, size }) =>
    theme.typography.paragraph[variant][size].lineHeight}px;
  color: ${({ theme }) => theme.colors.grey};

  ${({ theme, isMobile }) => {
    if (isMobile) {
      return {
        fontSize: `${theme.typography.paragraph.regular[2].size}px`,
        fontWeight: theme.typography.paragraph.regular[2].fontWeight,
        lineHeight: `${theme.typography.paragraph.regular[2].lineHeight}px`,
      };
    }
  }}
`;
