import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: ${({ theme }) => theme?.sizes[1]}vw;
  height: ${({ theme }) => theme?.sizes[1]}vh;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black}E8;
  cursor: pointer;
  z-index: 99999;
`;
