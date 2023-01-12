import styled from 'styled-components';

export const StyledMapSection = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: 100%;
  align-items: center;
`;
