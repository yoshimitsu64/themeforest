import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[17]}px;
`;
