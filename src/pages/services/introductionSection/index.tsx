import Breadcrumbs from 'components/business/breadcrumbs';

import { StyledIntroductionSection, StyledContainer } from 'pages/home/introductionSection/styled';
import {
  StyledPageDescription,
  StyledTitlePage,
  StyledDescriptor,
  StyledDescription,
} from './styled';

function IntroductionSection(): JSX.Element {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Service" url="services" color="black" />
        <StyledPageDescription>
          <StyledTitlePage>Services</StyledTitlePage>
          <StyledDescriptor>Data Analytics Services</StyledDescriptor>
          <StyledDescription>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
          </StyledDescription>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
