import Card from 'components/ui/cards/benefitCard';
import { benefitsCards } from 'constants/cardsPayload/benefitsCards';
import useMediaQuery from 'hooks/useMediaQuery';
import { useMemo } from 'react';

import {
  StyledCardsContainer,
  StyledTabletCardsContainer,
  StyledMobileCardsContainer,
} from './styled';

function CardsSection(): JSX.Element {
  const isMobile = useMediaQuery(640);
  const isTablet = useMediaQuery(1110);

  const cards = useMemo(
    () =>
      benefitsCards.map(({ title, subtitle, image }, index) => (
        <Card title={title} subtitle={subtitle} image={image} key={index} />
      )),
    []
  );

  if (isMobile) {
    return <StyledMobileCardsContainer>{cards}</StyledMobileCardsContainer>;
  }
  if (isTablet) {
    return <StyledTabletCardsContainer>{cards}</StyledTabletCardsContainer>;
  }
  return <StyledCardsContainer>{cards}</StyledCardsContainer>;
}

export default CardsSection;
