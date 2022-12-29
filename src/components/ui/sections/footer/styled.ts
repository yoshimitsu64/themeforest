import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 405px;
  padding-right: 405px;
`;
