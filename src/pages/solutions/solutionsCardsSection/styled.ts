import styled from 'styled-components';

export const StyledServiceCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  column-gap: ${({ theme }) => theme.space[1]}px;
  row-gap: ${({ theme }) => theme.space[3]}px;
  height: max-content;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainerMobile = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
`;
