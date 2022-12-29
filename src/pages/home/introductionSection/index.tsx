import { useNavigate } from 'react-router-dom';

import Description from 'components/business/description';
import Title from 'components/business/description/title';
import Subtitle from 'components/business/description/subtitle';
import CircleButton from 'components/ui/buttons/circleButton';
import { StyledIntroductionSection, StyledImage } from './styled';

function IntroductionSection(): JSX.Element {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate('/solutions');
  };

  return (
    <StyledIntroductionSection>
      <Description>
        <Title variant="extraBold" size={0}>
          <span>
            Find true power in your data with <span style={{ color: '#185CFF' }}>Ensome</span>
          </span>
        </Title>
        <Subtitle variant="regular" size={1}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </Subtitle>
      </Description>
      <StyledImage>
        <CircleButton onClick={handleClick}>Learn more</CircleButton>
      </StyledImage>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
