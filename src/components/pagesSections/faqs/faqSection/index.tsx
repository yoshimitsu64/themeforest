import FaqCard from 'components/cards/faqCard';

import { faqsMocks } from 'mocks/index';

import { StyledFaqsSection, StyledContainer } from './styled';

export const FaqSection = (): JSX.Element => {
  return (
    <StyledFaqsSection>
      <StyledContainer>
        {faqsMocks.map(({ title, text }, index) => (
          <FaqCard title={title} text={text} key={index} />
        ))}
      </StyledContainer>
    </StyledFaqsSection>
  );
};

export default FaqSection;
