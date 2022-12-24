import styled from 'styled-components';

export const StyledBenefits = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 405px;
  padding-right: 405px;
`;

export const BenefitsContainer = styled.div`
  display: flex;
`;
