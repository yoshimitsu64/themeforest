import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1110px;
  height: max-content;
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;

  & img {
    width: 100%;
    min-height: 230px;
    object-fit: cover;
  }

  & > *:not(img) {
    position: absolute;
    top: -10%;
    left: 55%;
  }
`;
