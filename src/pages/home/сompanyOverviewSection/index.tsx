import Typography from 'components/business/typography';
import { logos } from 'constants/companiesLogos';

import {
  StyledBenefit,
  StyledBenefits,
  StyledTitle,
  StyledDescription,
  StyledCompanyExperience,
  StyledLogo,
  StyledLogosContainer,
} from './styled';

function CompanyOverviewSection(): JSX.Element {
  return (
    <StyledCompanyExperience>
      <StyledTitle>We provide services that guarantee your success</StyledTitle>
      <StyledDescription>
        <StyledBenefits>
          <StyledBenefit>
            <Typography type="headLine" variant="extraBold" size={0} color="primary">
              1830+
            </Typography>
            <Typography type="paragraph" variant="regular" size={1}>
              Project executed
            </Typography>
          </StyledBenefit>
          <StyledBenefit>
            <Typography type="headLine" variant="extraBold" size={0} color="primary">
              834+
            </Typography>
            <Typography type="paragraph" variant="regular" size={1}>
              Satisfied customers
            </Typography>
          </StyledBenefit>
          <StyledBenefit>
            <Typography type="headLine" variant="extraBold" size={0} color="primary">
              390
            </Typography>
            <Typography type="paragraph" variant="regular" size={1}>
              Data management
            </Typography>
          </StyledBenefit>
        </StyledBenefits>
        <Typography type="paragraph" variant="regular" size={0}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
          quam, non mollis quam finibus nec.
        </Typography>
      </StyledDescription>
      <StyledLogosContainer>
        {logos.map((logo, index) => (
          <StyledLogo logo={logo} key={index} />
        ))}
      </StyledLogosContainer>
    </StyledCompanyExperience>
  );
}

export default CompanyOverviewSection;
