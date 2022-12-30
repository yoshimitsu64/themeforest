import Breadcrumbs from 'components/business/breadcrumbs';

import { StyledContainer, StyledIntroductionSection } from 'pages/home/introductionSection/styled';
import {
  StyledDescription,
  StyledDescriptor,
  StyledPageDescription,
  StyledTitlePage,
} from 'pages/services/introductionSection/styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Service" color="black" />
        <StyledPageDescription>
          <StyledTitlePage>Solutions</StyledTitlePage>
          <StyledDescriptor>Data analytics solutions</StyledDescriptor>
          <StyledDescription>
            Getting ready for your success, we provide truly outstanding IT solutions.
          </StyledDescription>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
