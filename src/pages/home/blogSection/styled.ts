import styled from 'styled-components';

export const StyledBlogSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  margin-left: 405px;
  margin-right: 405px;
  margin-bottom: ${({ theme }) => theme.sizes[1]}px;
`;
export const StyledBlogsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledBlogSectionTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledBlogCardsContainer = styled.div`
  display: flex;
  width: 100%;

  & .blogCard:not(:last-child) {
    margin-right: ${({ theme }) => theme.padding[5]}px;
  }
`;

export const StyledArrowsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.padding[4]}px;
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
`;
