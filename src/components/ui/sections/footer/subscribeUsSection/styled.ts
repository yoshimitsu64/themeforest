import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[9]}px;
  padding-bottom: ${({ theme }) => theme.space[9]}px;

  max-height: ${({ theme }) => theme.sizes[5]}px;
  width: 1110px;
  align-self: center;
  justify-content: space-between;

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: ${({ theme }) => theme.sizes[1] * 100}px;
    transform: translate(-27%);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledContainerMobile = styled(StyledContainer)`
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainerDesktopOrTablet = styled(StyledContainer)`
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
`;
