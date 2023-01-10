import styled from 'styled-components';

import { IProps } from './types';

export const StyledTypography = styled.div<Omit<IProps, 'children'>>`
  display: ${({ element }) => element === 'span' && 'inline'};
  height: max-content;
  ${({ theme, type, variant, size, color, mt, mb, ml, mr, m, width, textAlign }) => {
    return {
      fontSize: `${theme.typography[type][variant][size].size}px`,
      fontWeight: theme.typography[type][variant][size].fontWeight,
      lineHeight: `${theme.typography[type][variant][size].lineHeight}px`,
      color: theme.colors[color!],
      marginTop: mt,
      marginBottom: mb,
      marginLeft: ml,
      marginRight: mr,
      margin: m,
      maxWidth: width,
      textAlign,
    };
  }}
`;
