import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';

import { StyledIntroductionSection, StyledContainer, StyledDescription } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Our team" url="our-team" color="white" />
        <StyledDescription>
          <Typography type="headLine" size={0} variant="extraBold" color="white">
            Our team
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
            laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
            consectetur.
            <br />
            <br />
            Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
            tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
            commodo libero.
          </Typography>
        </StyledDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
