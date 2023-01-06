import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
