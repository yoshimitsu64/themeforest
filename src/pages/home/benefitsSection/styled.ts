import styled from 'styled-components';

export const StyledBenefits = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;
