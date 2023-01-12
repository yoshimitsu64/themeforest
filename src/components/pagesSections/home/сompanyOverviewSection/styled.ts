import styled from 'styled-components';

interface ILogos {
  logo: string;
}
export const StyledCompanyExperience = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledCompanyExperienceMobile = styled(StyledCompanyExperience)`
  margin-top: ${({ theme }) => theme.space[9]}px;
  padding: ${({ theme }) => theme.space[2]}px;
`;

export const StyledDescription = styled.div`
  display: flex;
  height: max-content;
  align-items: center;
`;

export const StyledDescriptionMobile = styled(StyledDescription)`
  flex-direction: column;
`;

export const StyledBenefits = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.sizes[0] - 20}px;
`;

export const StyledBenefitsMobile = styled(StyledBenefits)`
  padding: ${({ theme }) => theme.space[2]}px;
  margin-right: unset;
`;

export const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: ${({ theme }) => theme.space[2]}px;
  &:first-child {
    margin-bottom: ${({ theme }) => theme.sizes[0] - 40}px;
  }
`;
export const StyledLogosContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  overflow: auto;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledLogo = styled.div<ILogos>`
  content: url(${({ logo }) => logo});
  width: ${({ theme }) => theme.sizes[1]}%;
`;
