import styled from 'styled-components';

export const StyledNewSolutions = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[7]}px;
`;

export const StyledImageContainer = styled.div`
  width: fit-content;
  height: fit-content;

  & img {
    width: 100%;
    height: 100%;
    min-height: 230px;
    object-fit: cover;
  }
`;
