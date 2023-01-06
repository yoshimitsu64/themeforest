import styled from 'styled-components';
import Image from 'assets/images/homePage/02_img_10.jpg';

export const StyledNewSolutions = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  max-height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  column-gap: ${({ theme }) => theme.space[3]}px;
`;

export const StyledImage = styled.div`
  height: inherit;
  width: max-content;
  content: url(${Image});
  margin-right: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[7]}px;
`;

export const StyledImageContainer = styled.div`
  width: fit-content;

  & img {
    width: ${({ theme }) => theme.sizes[1]}%;
    min-height: 230px;
    object-fit: cover;
  }
`;
