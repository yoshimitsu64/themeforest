import styled from 'styled-components';

export const StyledBlog = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  column-gap: ${({ theme }) => theme.space[3]}px;
`;

export const StyledImage = styled.img`
  width: 50%;
`;

export const StyledBlogDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
