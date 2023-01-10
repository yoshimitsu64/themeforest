import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const StyledBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 100px;
  width: ${({ theme }) => theme.sizes[1]}vw;
  min-height: ${({ theme }) => theme.sizes[1]}vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[3]}px;
  z-index: 9999;
  animation: ${fadeIn} 0.12s linear;
  animation-fill-mode: forwards;
`;

export const StyledBurgerItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  border-bottom: ${({ theme }) => theme.borders.border[1]};
`;
