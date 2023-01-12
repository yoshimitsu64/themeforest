import styled from 'styled-components';

export const StyledBlogSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  margin-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledBlogSectionMobile = styled(StyledBlogSection)`
  margin-top: ${({ theme }) => theme.space[9]}px;
  margin-bottom: ${({ theme }) => theme.space[9]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  max-width: ${({ theme }) => theme.sizes[17]}px;
`;

export const StyledBlogsSectionHeader = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;
export const StyledBlogCardsContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  column-gap: ${({ theme }) => theme.space[5]}px;
`;

export const StyledArrowsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.space[4]}px;
  }
`;

export const StyledArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borders.borderRadius[3]}px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.sizes[17]}px) {
    width: 60px;
  }
`;
