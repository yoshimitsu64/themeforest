import styled from 'styled-components';

interface IProps {
  text?: 'Mo' | 'Yr';
}

export const StyledButton = styled.button<IProps>`
  width: ${({ theme }) => theme.sizes[0]}px;
  padding: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme, text }) =>
    text === 'Mo' ? theme.colors.primary : theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  border: ${({ theme, text }) => (text === 'Yr' ? `2px solid ${theme.colors.primary}` : 'none')};
  color: ${({ theme, text }) => (text === 'Mo' ? theme.colors.white : theme.colors.primary)};
  cursor: pointer;
`;
