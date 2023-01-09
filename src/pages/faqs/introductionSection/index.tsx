import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';

import { StyledIntroductionSection, StyledContainer, StyledPageDescription } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="FAQs" url="faqs" color="black" />
        <StyledPageDescription>
          <Typography type="headLine" variant="bold" size={2} color="primary">
            FAQs
          </Typography>
          <Typography type="headLine" variant="extraBold" size={0} mt={15}>
            Frequently asked questions
          </Typography>
          <Typography type="paragraph" variant="regular" size={0} color="grey" mt={15}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium totam.
          </Typography>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
