import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';

import { StyledContainer, StyledIntroductionSection } from 'pages/home/introductionSection/styled';
import { StyledPageDescription } from 'pages/services/introductionSection/styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Service" url="service" color="black" />
        <StyledPageDescription>
          <Typography type="headLine" variant="bold" size={2} color="primary">
            Solutions
          </Typography>
          <Typography type="headLine" variant="extraBold" size={0} mt={15}>
            Data analytics solutions
          </Typography>
          <Typography type="paragraph" variant="regular" size={0} color="grey" mt={15}>
            Getting ready for your success, we provide truly outstanding IT solutions.
          </Typography>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
