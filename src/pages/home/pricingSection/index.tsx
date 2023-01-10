import Typography from 'components/typography';
import PricingCard from 'components/cards/pricingCard';
import { pricingCards } from 'constants/cardsPayload/pricingCards';

import { StyledPricingSection, StyledPricingCardsContainer } from './styled';

function PricingSection(): JSX.Element {
  return (
    <StyledPricingSection>
      <Typography type="headLine" variant="extraBold" size={1}>
        Our pricing
      </Typography>
      <StyledPricingCardsContainer>
        {pricingCards.map(({ price, title, possibilities }, index) => (
          <PricingCard possibilities={possibilities} price={price} title={title} key={index} />
        ))}
      </StyledPricingCardsContainer>
    </StyledPricingSection>
  );
}

export default PricingSection;
