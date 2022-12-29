import FaqCard from 'components/ui/cards/faqCard';

import { StyledFaqsSection, StyledContainer } from './styled';

export const FaqSection = (): JSX.Element => {
  return (
    <StyledFaqsSection>
      <StyledContainer>
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </StyledContainer>
    </StyledFaqsSection>
  );
};

export default FaqSection;
