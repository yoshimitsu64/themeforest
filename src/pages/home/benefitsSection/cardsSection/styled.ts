import styled from 'styled-components';

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > * {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  & .card:nth-child(-n + 2) {
    margin-right: ${({ theme }) => theme.space[3]}px;
  }

  & .card:nth-child(1) {
    margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  }

  & .card:nth-child(3) {
    margin-top: ${({ theme }) => theme.sizes[3]}px;
  }
`;

export const StyledCardImage = styled.div`
  &:first-child {
    font-size: ${({ theme }) => theme.fonts[8]}px;
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
`;
