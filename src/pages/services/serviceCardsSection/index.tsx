import { serviceCards } from 'constants/cardsPayload/serviceCards';

import ServiceCard from 'components/ui/cards/serviceCard';

import { StyledServiceCardsSection, StyledContainer } from './styled';

function ServiceCardsSection(): JSX.Element {
  return (
    <StyledServiceCardsSection>
      <StyledContainer>
        {serviceCards.map(({ image, title, subtitle }, index) => (
          <ServiceCard imageURL={image} title={title} key={index}>
            {subtitle}
          </ServiceCard>
        ))}
      </StyledContainer>
    </StyledServiceCardsSection>
  );
}

export default ServiceCardsSection;
