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
  width: ${({ theme }) => theme.sizes[0]}%;
  height: max-content;
  flex-wrap: wrap;
  justify-content: space-between;
`;
