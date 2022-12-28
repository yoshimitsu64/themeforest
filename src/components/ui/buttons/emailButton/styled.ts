import styled from 'styled-components';
import { InputVariant } from 'appTypes/index';

export const StyledEmailButton = styled.input<InputVariant>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.sizes[1] + 20}px;
  height: ${({ theme }) => theme.sizes[0] + 5}px;
  background-color: ${({ theme, color }) => theme.colors[color!]};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.buttons.primary.hover};
  }
`;
