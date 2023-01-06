import { solutionsCards } from 'constants/cardsPayload/solutionsCards';

import SolutionCard from 'components/ui/cards/solutionCard';

import { StyledServiceCardsSection, StyledContainer } from './styled';

const SolutionsCardsSection = (): JSX.Element => {
  return (
    <StyledServiceCardsSection>
      <StyledContainer>
        {solutionsCards.map(({ image, title, subtitle }, index) => (
          <SolutionCard image={image} title={title} subtitle={subtitle} key={index} />
        ))}
      </StyledContainer>
    </StyledServiceCardsSection>
  );
};

export default SolutionsCardsSection;
