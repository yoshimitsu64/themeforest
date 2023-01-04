import styled from 'styled-components';

export const StyledPageDescription = styled.div`
  align-self: center;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[7]}px;
  text-align: center;
`;
