import styled from 'styled-components';

interface IProps {
  variant: string;
  size: number;
}

export const StyledTitle = styled.div<IProps>`
  width: ${({ theme }) => theme.sizes[10]}px;
  font-size: ${({ theme, variant, size }) =>
    theme.typography.headLine[variant][size].size}px;
  font-weight: ${({ theme, variant, size }) =>
    theme.typography.headLine[variant][size].fontWeight};
`;
