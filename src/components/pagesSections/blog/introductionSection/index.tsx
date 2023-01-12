import Typography from 'components/typography';
import Breadcrumbs from 'components/breadcrumbs';

import { StyledIntroductionSection, StyledContainer } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Typography
          type="headLine"
          variant="extraBold"
          size={1}
          mb={20}
          textAlign="center"
          width={600}
        >
          2022 software development trends explained with benefits
        </Typography>
        <Breadcrumbs page="2022 software development" url="blog" color="black" />
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
