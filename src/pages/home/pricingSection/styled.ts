import styled from 'styled-components';

export const StyledPricingSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  padding-left: 405px;
  padding-right: 405px;
`;

export const StyledPricingSectionTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledPricingCardsContainer = styled.div`
  display: flex;
  width: 100%;

  & .pricingCard:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[5]}px;
  }
`;

export const StyledPossibility = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-left: ${({ theme }) => theme.space[1]}px;
  }

  & svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
