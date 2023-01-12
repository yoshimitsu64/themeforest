import styled from 'styled-components';

export const StyledSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: max-content;
`;

export const StyledSearchField = styled.div`
  display: flex;
  height: ${({ theme }) => theme.sizes[0]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.sizes[8]}px;
`;

export const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes[0] + 30}%;
  padding-left: ${({ theme }) => theme.space[1]}px;
  border: none;
  border-radius: inherit;
  outline: none;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: inherit;
`;
