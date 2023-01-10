import styled from 'styled-components';

export const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[6]}px;
`;

export const StyledBlogImage = styled.img`
  width: ${({ theme }) => theme.sizes[1]}%;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;
export const StyledReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;
