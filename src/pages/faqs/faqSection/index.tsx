import FaqCard from 'components/cards/faqCard';

import { faqsCards } from 'constants/cardsPayload/faqsCards';

import { StyledFaqsSection, StyledContainer } from './styled';

export const FaqSection = (): JSX.Element => {
  return (
    <StyledFaqsSection>
      <StyledContainer>
        {faqsCards.map(({ title, text }, index) => (
          <FaqCard title={title} text={text} key={index} />
        ))}
      </StyledContainer>
    </StyledFaqsSection>
  );
};

export default FaqSection;
