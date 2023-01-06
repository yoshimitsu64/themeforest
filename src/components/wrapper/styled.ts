import styled from 'styled-components';

import { IProps } from './types';

export const StyledWrapper = styled.section<IProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: ${({ theme, variant }) =>
    variant === 'stretch' ? `${theme.sizes[1]}%` : `${theme.sizes[17]}px`};
  width: ${({ width }) => width && `${width}px`};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  margin-top: ${({ mt }) => mt && mt}px;
  margin-bottom: ${({ mb }) => mb && mb}px;
  margin-right: ${({ mr }) => mr && mr}px;
  margin-left: ${({ ml }) => ml && ml}px;
`;
