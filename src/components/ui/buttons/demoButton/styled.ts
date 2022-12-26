import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: ${({ theme }) => theme.sizes[3]}px;
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  height: ${({ theme }) => theme.sizes[0]}px;
  background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
  color: ${({ theme }) => theme.buttons.primary.color};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  font-weight: bold;
  border: none;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
