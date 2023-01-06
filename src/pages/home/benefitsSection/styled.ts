import styled from 'styled-components';

export const StyledBenefitsSection = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  max-height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;

export const BenefitsDesktopContainer = styled.div`
  display: flex;
  max-width: 1110px;
  column-gap: ${({ theme }) => theme.space[3]}px;
`;

export const BenefitsTabletContainer = styled(StyledBenefitsSection)`
  flex-direction: column;
  align-items: center;
`;
