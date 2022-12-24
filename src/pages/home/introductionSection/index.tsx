import Description from 'components/description';
import Title from 'components/description/title';
import Subtitle from 'components/description/subtitle';
import CircleButton from 'components/ui/buttons/circleButton';
import { StyledIntroductionSection, StyledImage } from './styled';

const IntroductionSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <Description>
        <Title variant="extraBold" size={0}>
          <span>
            Find true power in your data with{' '}
            <span style={{ color: '#185CFF' }}>Ensome</span>
          </span>
        </Title>
        <Subtitle variant="regular" size={1}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </Subtitle>
      </Description>
      <StyledImage>
        <CircleButton>Learn more</CircleButton>
      </StyledImage>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
