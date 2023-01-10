import { CheckmarkFilled } from '@fluentui/react-icons';
import Typography from 'components/typography';
import { useMediaQuery } from 'hooks/useMediaQuery';

import {
  StyledAdvantagesSection,
  StyledImage,
  StyledDescription,
  StyledAdvantageContainer,
  StyledAdvantage,
  StyledAdvantagesSectionMobile,
  StyledImageMobile,
} from './styled';

const AdvantagesSection = (): JSX.Element => {
  const { isMobile } = useMediaQuery();

  const Container = isMobile ? StyledAdvantagesSectionMobile : StyledAdvantagesSection;
  const Image = isMobile ? StyledImageMobile : StyledImage;

  return (
    <Container>
      <Image />
      <StyledDescription>
        <Typography type="headLine" variant="extraBold" size={1} mb={20}>
          Why choose us?
        </Typography>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Machine learning</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Embed analytics</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Access control</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
      </StyledDescription>
    </Container>
  );
};

export default AdvantagesSection;
