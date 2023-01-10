import { useMemo } from 'react';

import Card from 'components/cards/benefitCard';

import { benefitsCards } from 'constants/cardsPayload/benefitsCards';

import { useMediaQuery } from 'hooks/useMediaQuery';

import {
  StyledCardsContainer,
  StyledTabletCardsContainer,
  StyledMobileCardsContainer,
} from './styled';

function CardsSection(): JSX.Element {
  const { isDesktopOrTablet, isMobile, isTablet } = useMediaQuery();

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
  if (isDesktopOrTablet || isTablet) {
    return <StyledTabletCardsContainer>{cards}</StyledTabletCardsContainer>;
  }
  return <StyledCardsContainer>{cards}</StyledCardsContainer>;
}

export default CardsSection;
