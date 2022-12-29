import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme }) => theme.sizes[1]}vw;
  height: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledLogo = styled.img`
  width: ${({ theme }) => theme.sizes[1]}px;
`;
