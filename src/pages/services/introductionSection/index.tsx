import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';

import { StyledIntroductionSection, StyledContainer, StyledPageDescription } from './styled';

function IntroductionSection(): JSX.Element {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Service" url="services" color="black" />
        <StyledPageDescription>
          <Typography type="headLine" variant="bold" size={2} color="primary">
            Services
          </Typography>
          <Typography type="headLine" variant="extraBold" size={0} color="primary" mt={15}>
            Data Analytics Services
          </Typography>
          <Typography type="paragraph" variant="regular" size={0} color="grey" mt={15}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
          </Typography>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
