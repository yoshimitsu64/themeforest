import styled from 'styled-components';

export const StyledBenefits = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ theme }) => theme.sizes[10]}px;
  align-self: center;
`;

export const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.padding[3]}px;
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[0].fontWeight};
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & > * {
    margin-bottom: ${({ theme }) => theme.padding[3]}px;
    margin-right: ${({ theme }) => theme.padding[3]}px;
  }

  & .card:nth-child(1) {
    margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  }

  & .card:nth-child(3) {
    margin-top: ${({ theme }) => theme.sizes[4]}px;
  }
`;
