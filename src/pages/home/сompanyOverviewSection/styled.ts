import styled from 'styled-components';

interface ILogos {
  logo: string;
}
export const StyledCompanyExperience = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
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
  justify-content: space-between;
`;

export const StyledLogo = styled.div<ILogos>`
  content: url(${({ logo }) => logo});
  width: ${({ theme }) => theme.sizes[1]}%;
`;
