import styled from 'styled-components';

export const StyledSideBar = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  min-width: ${({ theme }) => theme.sizes[4]}px;
  max-width: ${({ theme }) => theme.sizes[8]}px;
  margin-bottom: ${({ theme }) => theme.space[12]}px;
`;

export const StyledPopularBlogs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[3]}px;
`;
