import styled from 'styled-components';

export const StyledTag = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[0]}px ${({ theme }) => theme.space[1]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #f1f6fa;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.paragraph.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.bold[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.bold[0].lineHeight}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
