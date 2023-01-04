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
