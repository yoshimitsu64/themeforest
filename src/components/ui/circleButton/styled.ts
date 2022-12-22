import styled from 'styled-components';

export const StyledWhiteBackground = styled.div`
  width: ${({ theme }) => theme.sizes[2] - 10}px;
  height: ${({ theme }) => theme.sizes[2] - 10}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes[1]}%;
  padding: ${({ theme }) => theme.padding[1]}px;
  z-index: 9888;
  cursor: pointer;
`;

export const StyledCircleButton = styled.button`
  width: ${({ theme }) => theme.sizes[1] + 20}px;
  height: ${({ theme }) => theme.sizes[1] + 20}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding[1]}px;
  border-radius: ${({ theme }) => theme.sizes[1]}%;
  border: none;
  cursor: inherit;
`;

export const StyledInternalCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[1]}%;
  border-radius: ${({ theme }) => theme.sizes[1]}%;
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.border[0]};
`;
