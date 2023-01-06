import styled from 'styled-components';

export const StyledCardsContainer = styled.div<{ isTablet?: boolean; isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 540px;
  column-gap: ${({ theme }) => theme.space[5]}px;
  & .card:nth-child(-n + 2) {
    margin-right: ${({ theme }) => theme.space[3]}px;
  }

  & .card:nth-child(1) {
    margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  }

  & .card:nth-child(3) {
    margin-top: ${({ theme }) => theme.sizes[3]}px;
  }

  & > * {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledTabletCardsContainer = styled(StyledCardsContainer)`
  flex-wrap: nowrap;
  flex-direction: unset;
  display: grid;
  grid-template-columns: 50% 50%;

  & .card {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: 0 !important;
    flex: 1;
  }
`;

export const StyledMobileCardsContainer = styled(StyledTabletCardsContainer)`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  box-sizing: border-box;
  width: ${({ theme }) => theme.sizes[1]}vw;
  align-items: center;
`;
