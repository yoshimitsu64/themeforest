import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes[8]}px;
  font-size: ${({ theme }) => theme.fonts[3]}px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
`;
