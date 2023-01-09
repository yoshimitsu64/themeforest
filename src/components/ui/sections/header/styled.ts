import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: ${({ theme }) => theme.sizes[1]}vw;
  height: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  z-index: 9999;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1110px;
`;

export const StyledContentMobile = styled(StyledContent)`
  width: ${({ theme }) => theme.sizes[1] - 10}vw;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  max-width: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledBurger = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;
