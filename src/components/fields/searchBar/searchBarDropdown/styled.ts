import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  max-height: ${({ theme }) => theme.sizes[2]}px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  row-gap: ${({ theme }) => theme.space[1]}px;
  padding: ${({ theme }) => theme.space[2]}px;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.space[0]}px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.space[1]}px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
