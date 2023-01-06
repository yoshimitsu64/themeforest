import styled from 'styled-components';

export const StyledServiceCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div<{ isMobile: boolean }>`
  max-width: 1110px;
  display: grid;
  grid-template-columns: 45% 45%;
  height: max-content;
  justify-content: space-between;
  ${({ isMobile }) => {
    if (isMobile) {
      return {
        display: 'flex',
        flexDirection: 'column',
      };
    }
  }};
`;
