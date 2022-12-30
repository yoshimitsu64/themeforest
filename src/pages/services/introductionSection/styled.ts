import styled from 'styled-components';

export const StyledPageDescription = styled.div`
  align-self: center;
  width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[7]}px;
  text-align: center;
`;

export const StyledTitlePage = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight};
`;

export const StyledDescriptor = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;

export const StyledDescription = styled.div`
  max-width: ${({ theme }) => theme.sizes[0] + 20}%;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
`;
