import styled from 'styled-components';

export const StyledBenefitsSection = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  max-height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
`;

export const StyledBenefitsSectionMobile = styled(StyledBenefitsSection)`
  margin-top: ${({ theme }) => theme.space[9]}px;
`;

export const BenefitsDesktopContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  column-gap: ${({ theme }) => theme.space[3]}px;
`;

export const BenefitsTabletContainer = styled(BenefitsDesktopContainer)`
  flex-direction: column;
  align-items: center;
`;
