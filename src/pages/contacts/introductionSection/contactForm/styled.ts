import styled, { css } from 'styled-components';
import { InputVariant } from 'appTypes/index';

interface Iprops {
  error?: boolean;
}

const sharedInputStyle = css<InputVariant & Iprops>`
  padding-left: ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.sizes[0]}px;

  &:focus {
    ${({ theme, error }) => {
      if (!error) {
        return {
          color: `${theme.emailTextFields.error.color}`,
          caretColor: `${theme.emailTextFields.error.caretColor}`,
          border: `2px solid ${theme.emailTextFields.error.caretColor}`,
        };
      }
      return {
        caretColor: `${theme.emailTextFields.focused.caretColor}`,
        border: `2px solid ${theme.emailTextFields.focused.caretColor}`,
      };
    }}
  }
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space[6]}px;
  width: ${({ theme }) => theme.sizes[0]}%;

  & button {
    align-self: flex-end;
  }

  & input,
  textarea:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;

export const StyledContactFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledHeaderInput = styled.input`
  ${sharedInputStyle};
  width: ${({ theme }) => theme.sizes[0] - 3}%;
`;

export const StyledThemeInput = styled(StyledHeaderInput)`
  ${sharedInputStyle};
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledMessageInput = styled(StyledHeaderInput).attrs({
  as: 'textarea',
})`
  ${sharedInputStyle};
  padding-top: ${({ theme }) => theme.space[3]}px;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[2]}px;
  resize: none;
`;
