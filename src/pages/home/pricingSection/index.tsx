// import { CheckmarkFilled } from '@fluentui/react-icons';

import PricingCard from 'components/ui/cards/pricingCard';
import { pricingCards } from 'constants/cardsPayload/pricingCards';

import {
  StyledPricingSection,
  StyledPricingSectionTitle,
  // StyledPossibility,
  StyledPricingCardsContainer,
} from './styled';

function PricingSection(): JSX.Element {
  return (
    <StyledPricingSection>
      <StyledPricingSectionTitle>Our pricing</StyledPricingSectionTitle>
      <StyledPricingCardsContainer>
        {pricingCards.map(({ price, title, possibilities }) => (
          <PricingCard possibilities={possibilities} price={price} title={title} />
        ))}
      </StyledPricingCardsContainer>
    </StyledPricingSection>
  );
}

export default PricingSection;
