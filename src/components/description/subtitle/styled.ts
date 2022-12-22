import styled from 'styled-components';

interface IProps {
  variant: string;
  size: number;
}

export const StyledSubtitle = styled.p<IProps>`
  width: ${({ theme }) => theme.sizes[7]}px;
  font-size: ${({ theme, variant, size }) =>
    theme.typography.paragraph[variant][size].size}px;
  font-weight: ${({ theme, variant, size }) =>
    theme.typography.paragraph[variant][size].fontWeight};
`;
