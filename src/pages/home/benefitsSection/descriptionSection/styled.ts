import styled from 'styled-components';

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: ${({ theme }) => theme.sizes[0]}%;
  margin-right: ${({ theme }) => theme.space[5]}px;
`;
