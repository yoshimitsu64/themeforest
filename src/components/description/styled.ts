import styled from 'styled-components';

export const StyledDescription = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  width: ${({ theme }) => theme.sizes[1]}%;

  & > *:first-child {
    margin-right: 30px;
  }
`;
