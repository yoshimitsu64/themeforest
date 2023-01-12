import Breadcrumbs from 'components/breadcrumbs';
import Typography from 'components/typography';
import { StyledIntroductionSection, StyledContainer, StyledPageDescription } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Blog" url="/home" />
        <StyledPageDescription>
          <Typography type="headLine" variant="bold" size={2} color="primary">
            Blog
          </Typography>
          <Typography type="headLine" variant="extraBold" size={1}>
            Discover new things with Ensome blog
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey" mb={100}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </Typography>
        </StyledPageDescription>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
