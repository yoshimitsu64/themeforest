import styled from 'styled-components';

export const StyledCarousel = styled.div`
  display: flex;
  max-width: 1110px;
  overflow-x: hidden;
  scroll-behavior: smooth;

  & div:not(div:last-child) {
    margin-right: ${({ theme }) => theme.padding[5]}px;
  }
`;

export const StyledArrowsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  & button:first-child {
    margin-right: ${({ theme }) => theme.padding[4]}px;
  }
`;
