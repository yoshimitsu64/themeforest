import styled from 'styled-components';

export const StyledPricingSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  padding: ${({ theme }) => theme.space[2]}px;
`;

export const StyledPricingCardsContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.sizes[1]}vw;
  overflow-x: scroll;
  column-gap: ${({ theme }) => theme.space[5]}px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
