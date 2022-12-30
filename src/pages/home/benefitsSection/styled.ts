import styled from 'styled-components';

export const StyledBenefits = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  width: 1110px;
`;
