import Breadcrumbs from 'components/breadcrumbs';
import Typography from 'components/typography';

import { StyledContainer } from 'components/pagesSections/home/introductionSection/styled';
import { StyledPageDescription } from 'components/pagesSections/services/introductionSection/styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default IntroductionSection;
