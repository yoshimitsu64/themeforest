import styled from 'styled-components';

export const StyledBlogsSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: center;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  column-gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[12]}px;
`;

export const StyledBlogsSectionDesktopOrTablet = styled(StyledBlogsSection)`
  padding: ${({ theme }) => theme.space[4]}px;
  margin-top: ${({ theme }) => theme.space[9]}px;
`;

export const StyledBlogsSectionTablet = styled(StyledBlogsSectionDesktopOrTablet)`
  flex-direction: column;
`;

export const componentsArray = [
  StyledBlogsSection,
  StyledBlogsSectionDesktopOrTablet,
  StyledBlogsSectionTablet,
  StyledBlogsSectionTablet,
];
