import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
