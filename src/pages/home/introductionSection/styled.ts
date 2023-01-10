import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[17]}px;
  height: max-content;
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes[1]}%;

  & img {
    width: ${({ theme }) => theme.sizes[1]}%;
    min-height: 230px;
    object-fit: cover;
  }

  & > *:not(img) {
    position: absolute;
    top: -10%;
    left: 55%;
  }
`;
