import styled from 'styled-components';

export const StyledEmailTextField = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[8]}px;
  background-color: ${({ theme }) => theme.colors.helperBlue3};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
`;

export const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes[0] + 20}%;
  padding-left: ${({ theme }) => theme.padding[3]}px;
  border: none;
  border-radius: inherit;
  background-color: inherit;
  caret-color: ${({ theme }) => theme.colors.primary};
  outline: none;
`;
