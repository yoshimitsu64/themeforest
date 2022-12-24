import styled from 'styled-components';

export const StyledEmailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.sizes[1] + 20}px;
  height: ${({ theme }) => theme.sizes[0] + 5}px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  cursor: pointer;
  border: none;
  border-radius: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.buttons.primary.hover};
  }
`;
