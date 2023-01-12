import { useMediaQuery } from 'hooks/index';

import { solutionsCardsMocks } from 'mocks/index';

import SolutionCard from 'components/cards/solutionCard';

import { StyledServiceCardsSection, StyledContainer, StyledContainerMobile } from './styled';

const SolutionsCardsSection = (): JSX.Element => {
  const { isMobile } = useMediaQuery();

  const Container = isMobile ? StyledContainerMobile : StyledContainer;

  return (
    <StyledServiceCardsSection>
      <Container>
        {solutionsCardsMocks.map(({ image, title, subtitle }, index) => (
          <SolutionCard image={image} title={title} subtitle={subtitle} key={index} />
        ))}
      </Container>
    </StyledServiceCardsSection>
  );
};

export default SolutionsCardsSection;
