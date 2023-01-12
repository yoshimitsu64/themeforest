import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
`;
