import styled from 'styled-components';

export const StyledPricingSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
`;

export const StyledPricingCardsContainer = styled.div`
  display: flex;
  max-width: 100vw;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & .pricingCard:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[5]}px;
  }
`;
