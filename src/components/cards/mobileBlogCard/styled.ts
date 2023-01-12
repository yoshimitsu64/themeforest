import styled from 'styled-components';

export const StyledMobileBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  row-gap: ${({ theme }) => theme.space[2]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
`;

export const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[1]}px;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  margin-left: ${({ theme }) => theme.space[1]}px;
  margin-right: ${({ theme }) => theme.space[1]}px;
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme.sizes[1]}%;
`;
