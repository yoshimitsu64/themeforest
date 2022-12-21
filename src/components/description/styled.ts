import styled from 'styled-components';

export const StyledDescription = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;
