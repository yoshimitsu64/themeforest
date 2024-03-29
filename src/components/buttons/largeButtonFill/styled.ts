import styled from 'styled-components';

export const StyledLargeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[3]}px;
  min-height: ${({ theme }) => theme.sizes[0] + 5}px;
  background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
  color: ${({ theme }) => theme.buttons.primary.color};
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.buttons.primary.hover};
  }
`;
