import styled from 'styled-components';

import { InputVariant } from 'appTypes/index';

export const StyledEmailTextField = styled.div<InputVariant>`
  display: flex;
  width: ${({ theme }) => theme.sizes[8]}px;
  background-color: ${({ theme }) => theme.colors.helperBlue3};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  justify-content: space-between;

  &:has(input:focus) {
    ${({ theme, variant }) => {
      if (variant === 'error') {
        return {
          'background-color': `${theme.emailTextFields.error.backgroundColor}`,
        };
      }
    }}
  }

  & input:focus {
    ${({ theme, variant }) => {
      if (variant === 'error') {
        return {
          color: `${theme.emailTextFields.error.color}`,
          'caret-color': `${theme.emailTextFields.error.caretColor}`,
        };
      }
    }}
  }

  &:hover {
    background-color: ${({ theme }) => theme.emailTextFields.hovered.backgroundColor};
    color: ${({ theme }) => theme.emailTextFields.hovered.color};
  }
`;

export const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes[0] + 20}%;
  padding-left: ${({ theme }) => theme.space[3]}px;
  border: none;
  border-radius: inherit;
  background-color: inherit;
  caret-color: ${({ theme }) => theme.colors.primary};
  outline: none;
`;
