import Breadcrumbs from 'components/business/breadcrumbs';

import { StyledIntroductionSection, StyledContainer } from 'pages/home/introductionSection/styled';

import {
  StyledPageDescription,
  StyledTitlePage,
  StyledDescriptor,
  StyledDescription,
} from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="FAQs" url="faqs" color="black" />
        <StyledPageDescription>
          <StyledTitlePage>FAQs</StyledTitlePage>
          <StyledDescriptor>Frequently asked questions</StyledDescriptor>
          <StyledDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium totam.
          </StyledDescription>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
