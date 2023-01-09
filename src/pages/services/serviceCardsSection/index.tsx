import { serviceCards } from 'constants/cardsPayload/serviceCards';

import ServiceCard from 'components/ui/cards/serviceCard';
import { useMediaQueryNew } from 'hooks/useMediaQueryNew';

import { StyledServiceCardsSection, StyledContainer, StyledMobileContainer } from './styled';

function ServiceCardsSection(): JSX.Element {
  const { isMobile } = useMediaQueryNew();

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
