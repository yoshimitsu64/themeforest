import Breadcrumbs from 'components/business/breadcrumbs';
import {
  StyledIntroductionSection,
  StyledContainer,
  StyledDescription,
  StyledSubtitle,
  StyledTitle,
} from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="our-team" color="white" />
        <StyledDescription>
          <StyledTitle>Our team</StyledTitle>
          <StyledSubtitle>
            Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
            laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
            consectetur.
            <br />
            <br />
            Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
            tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
            commodo libero.
          </StyledSubtitle>
        </StyledDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
