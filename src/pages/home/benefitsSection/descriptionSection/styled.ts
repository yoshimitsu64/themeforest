import styled from 'styled-components';

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 540px;
  margin-right: ${({ theme }) => theme.space[5]}px;
`;

export const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
`;
