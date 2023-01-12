import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'hooks/index';

import TextBlock from 'components/textBlock';
import Typography from 'components/typography';
import CircleButton from 'components/buttons/circleButton';

import Image1 from 'assets/images/homePage/img_11.jpg';

import { StyledIntroductionSection, StyledImageContainer } from './styled';

function IntroductionSection(): JSX.Element {
  const { isDesktop, isDesktopOrTablet, isTablet, isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate('/solutions');
  };

  return (
    <StyledIntroductionSection>
      {(isDesktop || isDesktopOrTablet) && (
        <TextBlock mt={70} mb={50}>
          <Typography type="headLine" variant="extraBold" size={0}>
            Find true power in your data wit{' '}
            <Typography type="headLine" variant="extraBold" size={0} color="primary" element="span">
              Ensome
            </Typography>
          </Typography>
          <Typography type="paragraph" variant="regular" size={1} color="grey" ml={100}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Typography>
        </TextBlock>
      )}
      {isTablet && (
        <TextBlock mt={40} mb={30}>
          <Typography type="headLine" variant="extraBold" size={1}>
            Find true power in your data wit{' '}
            <Typography type="headLine" variant="extraBold" size={1} color="primary" element="span">
              Ensome
            </Typography>
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey" ml={70}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Typography>
        </TextBlock>
      )}
      {isMobile && (
        <TextBlock mt={30} mb={40}>
          <Typography type="headLine" variant="extraBold" size={2}>
            Find true power in your data wit{' '}
            <Typography type="headLine" variant="extraBold" size={2} color="primary" element="span">
              Ensome
            </Typography>
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Typography>
        </TextBlock>
      )}
      <StyledImageContainer>
        <img src={Image1} alt="People" />
        <CircleButton onClick={handleClick}>Learn more</CircleButton>
      </StyledImageContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
