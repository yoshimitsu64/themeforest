import {
  StyledBenefit,
  StyledBenefits,
  StyledTitle,
  StyledCount,
  StyledDescription,
  StyledCompanyExperience,
  StyledText,
  StyledSubtitle,
  StyledLogo,
  StyledLogosContainer,
} from './styled';
import { logos } from 'constants/companiesLogos';

const CompanyOverviewSection = (): JSX.Element => {
  return (
    <StyledCompanyExperience>
      <StyledTitle>We provide services that guarantee your success</StyledTitle>
      <StyledDescription>
        <StyledBenefits>
          <StyledBenefit>
            <StyledCount>1830+</StyledCount>
            <StyledText>Project executed</StyledText>
          </StyledBenefit>
          <StyledBenefit>
            <StyledCount>834+</StyledCount>
            <StyledText>Satisfied customers</StyledText>
          </StyledBenefit>
          <StyledBenefit>
            <StyledCount>390</StyledCount>
            <StyledText>Data management</StyledText>
          </StyledBenefit>
        </StyledBenefits>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
          finibus nec.
        </StyledSubtitle>
      </StyledDescription>
      <StyledLogosContainer>
        {logos.map((logo) => (
          <StyledLogo logo={logo} />
        ))}
      </StyledLogosContainer>
    </StyledCompanyExperience>
  );
};

export default CompanyOverviewSection;
