import styled from 'styled-components';

export const StyledSolutionCard = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.space[4]}px;
  padding-left: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[6]}px;
  background-color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.shadows.shadowCard3.background};
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  border-radius: ${({ theme }) => theme.shadows.shadowCard3.borderRadius};
`;

export const StyledCardImage = styled.div`
  &:first-child {
    font-size: ${({ theme }) => theme.fonts[10]}px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledCardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[1]}px;
`;

export const StyledCardSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[2].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[2].lineHeight}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledReadMore = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.semiBold[0].fontWeight};
  margin-right: ${({ theme }) => theme.space[1]}px;
`;
