import Breadcrumbs from 'components/business/breadcrumbs';
import { StyledIntroductionSection, StyledTitle } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledTitle>About us</StyledTitle>
      <Breadcrumbs page="About us" url="about-us" />
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
