import styled from 'styled-components';

export const StyledDescription = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  padding-left: ${({ theme }) => theme.sizes[7]}px;
  padding-right: ${({ theme }) => theme.sizes[7]}px;

  & > *:first-child {
    margin-right: 30px;
  }
`;
