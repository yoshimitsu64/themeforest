import styled from 'styled-components';

import { IProps } from './types';

export const StyledTextBlock = styled.div<Pick<IProps, 'mb' | 'mt'>>`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  ${({ mb, mt }) => ({
    marginBottom: mb,
    marginTop: mt,
  })}
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: ${({ theme }) => theme.sizes[17]}px;
`;

export const StyledContainerMobile = styled(StyledContainer)`
  grid-template-columns: 100%;
  row-gap: ${({ theme }) => theme.space[3]}px;
`;
