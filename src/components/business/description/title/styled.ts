import styled from 'styled-components';

import { IProps } from './types';

export const StyledTitle = styled.div<Omit<IProps, 'children'>>`
  max-width: ${({ theme }) => theme.sizes[10]}px;
  font-size: ${({ theme, variant, size }) => theme.typography.headLine[variant][size].size}px;
  font-weight: ${({ theme, variant, size }) => theme.typography.headLine[variant][size].fontWeight};
  ${({ theme, isMobile }) => {
    if (isMobile) {
      return {
        fontSize: `${theme.typography.headLine.extraBold[2].size}px`,
        fontWeight: theme.typography.headLine.extraBold[2].fontWeight,
        marginBottom: '15px',
      };
    }
  }}
`;
