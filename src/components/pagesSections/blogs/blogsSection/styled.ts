import styled from 'styled-components';

export const StyledBlogsSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  row-gap: ${({ theme }) => theme.space[6]}px;
  margin-bottom: ${({ theme }) => theme.space[9]}px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  max-width: ${({ theme }) => theme.sizes[6]}px;
  padding: ${({ theme }) => theme.space[2]}px;
  height: ${({ theme }) => theme.sizes[0]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
  border: none;
`;
