import { useNavigate } from 'react-router-dom';

import Description from 'components/business/description';
import Title from 'components/business/description/title';
import Subtitle from 'components/business/description/subtitle';
import CircleButton from 'components/ui/buttons/circleButton';
import Image1 from 'assets/images/homePage/img_11.jpg';

import { StyledIntroductionSection, StyledImageContainer } from './styled';

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
      <StyledImageContainer>
        <img src={Image1} alt="People" />
        <CircleButton onClick={handleClick}>Learn more</CircleButton>
      </StyledImageContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
