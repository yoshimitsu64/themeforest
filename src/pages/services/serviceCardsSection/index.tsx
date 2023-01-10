import { serviceCards } from 'constants/cardsPayload/serviceCards';

import ServiceCard from 'components/cards/serviceCard';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { StyledServiceCardsSection, StyledContainer, StyledMobileContainer } from './styled';

function ServiceCardsSection(): JSX.Element {
  const { isMobile } = useMediaQuery();

  const child = serviceCards.map(({ image, title, subtitle }, index) => (
    <ServiceCard imageURL={image} title={title} key={index}>
      {subtitle}
    </ServiceCard>
  ));

  return (
    <StyledServiceCardsSection>
      {isMobile ? (
        <StyledMobileContainer>{child}</StyledMobileContainer>
      ) : (
        <StyledContainer>{child}</StyledContainer>
      )}
    </StyledServiceCardsSection>
  );
}

export default ServiceCardsSection;
