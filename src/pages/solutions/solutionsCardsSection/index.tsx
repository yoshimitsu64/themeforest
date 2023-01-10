import { solutionsCards } from 'constants/cardsPayload/solutionsCards';

import SolutionCard from 'components/cards/solutionCard';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { StyledServiceCardsSection, StyledContainer, StyledContainerMobile } from './styled';

const SolutionsCardsSection = (): JSX.Element => {
  const { isMobile } = useMediaQuery();

  const Container = isMobile ? StyledContainerMobile : StyledContainer;

  return (
    <StyledServiceCardsSection>
      <Container>
        {solutionsCards.map(({ image, title, subtitle }, index) => (
          <SolutionCard image={image} title={title} subtitle={subtitle} key={index} />
        ))}
      </Container>
    </StyledServiceCardsSection>
  );
};

export default SolutionsCardsSection;
