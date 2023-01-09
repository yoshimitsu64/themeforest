import Typography from 'components/business/typography';
import { logos } from 'constants/companiesLogos';
import { useMediaQueryNew } from 'hooks/useMediaQueryNew';

import {
  StyledBenefit,
  StyledBenefits,
  StyledDescription,
  StyledLogo,
  StyledLogosContainer,
  StyledCompanyExperience,
  StyledDescriptionMobile,
  StyledBenefitsMobile,
} from './styled';

function CompanyOverviewSection(): JSX.Element {
  const { isDesktop, isMobile } = useMediaQueryNew();

  const Description = !isDesktop ? StyledDescriptionMobile : StyledDescription;

  return (
    <StyledCompanyExperience>
      {isMobile ? (
        <Typography type="headLine" variant="extraBold" size={2} mb={20} textAlign="center">
          We provide services that guarantee your success
        </Typography>
      ) : (
        <Typography type="headLine" variant="extraBold" size={1} mb={20} textAlign="center">
          We provide services that guarantee your success
        </Typography>
      )}
      <Description>
        {!isMobile ? (
          <>
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
            <Typography type="paragraph" variant="regular" size={0} textAlign="center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Typography>
          </>
        ) : (
          <>
            <StyledBenefitsMobile>
              <StyledBenefit>
                <Typography type="headLine" variant="extraBold" size={2} color="primary">
                  1830+
                </Typography>
                <Typography type="paragraph" variant="regular" size={2}>
                  Project executed
                </Typography>
              </StyledBenefit>
              <StyledBenefit>
                <Typography type="headLine" variant="extraBold" size={2} color="primary">
                  834+
                </Typography>
                <Typography type="paragraph" variant="regular" size={2}>
                  Satisfied customers
                </Typography>
              </StyledBenefit>
              <StyledBenefit>
                <Typography type="headLine" variant="extraBold" size={2} color="primary">
                  390
                </Typography>
                <Typography type="paragraph" variant="regular" size={2}>
                  Data management
                </Typography>
              </StyledBenefit>
            </StyledBenefitsMobile>
            <Typography type="paragraph" variant="regular" size={2} textAlign="center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Typography>
          </>
        )}
      </Description>
      <StyledLogosContainer>
        {logos.map((logo, index) => (
          <StyledLogo logo={logo} key={index} />
        ))}
      </StyledLogosContainer>
    </StyledCompanyExperience>
  );
}

export default CompanyOverviewSection;
