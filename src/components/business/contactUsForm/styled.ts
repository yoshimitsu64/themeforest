import styled from 'styled-components';

export const StyledContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[5]}px;
  width: ${({ theme }) => theme.sizes[8]}px;
  height: ${({ theme }) => theme.sizes[11]}px;
  padding: ${({ theme }) => theme.space[9]}px;
  background-color: ${({ theme }) => theme.colors.white};
  align-content: space-between;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[2].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  flex: 1;
`;
