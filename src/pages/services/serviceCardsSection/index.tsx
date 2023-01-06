import { serviceCards } from 'constants/cardsPayload/serviceCards';

import ServiceCard from 'components/ui/cards/serviceCard';
import useMediaQuery from 'hooks/useMediaQuery';

import { StyledServiceCardsSection, StyledContainer } from './styled';

function ServiceCardsSection(): JSX.Element {
  const isMobile = useMediaQuery(670);

  return (
    <StyledServiceCardsSection>
      <StyledContainer isMobile={isMobile}>
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
