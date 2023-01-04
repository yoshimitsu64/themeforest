import Card from 'components/ui/cards/benefitCard';
import { benefitsCards } from 'constants/cardsPayload/benefitsCards';

import { StyledCardsContainer } from './styled';

function CardsSection(): JSX.Element {
  return (
    <StyledCardsContainer>
      {benefitsCards.map(({ title, subtitle, image }) => (
        <Card title={title} subtitle={subtitle} image={image} />
      ))}
    </StyledCardsContainer>
  );
}

export default CardsSection;
