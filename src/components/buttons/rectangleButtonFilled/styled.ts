import styled from 'styled-components';

interface IProps {
  width?: string;
}

export const StyledButton = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ width }) => width};
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  height: ${({ theme }) => theme.sizes[0]}px;
  background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
  color: ${({ theme }) => theme.buttons.primary.color};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  cursor: pointer;
  font-weight: bold;
  border: none;
`;
