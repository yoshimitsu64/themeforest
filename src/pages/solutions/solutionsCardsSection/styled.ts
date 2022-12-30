import styled from 'styled-components';

export const StyledServiceCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 1110px;
  height: max-content;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;

  & .solution-card:not(:nth-last-child(-n + 2)) {
    margin-bottom: ${({ theme }) => theme.space[5]}px;
  }
`;
