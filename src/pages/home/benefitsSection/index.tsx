import CardsSection from 'pages/home/benefitsSection/cardsSection';
import DescriptionSection from 'pages/home/benefitsSection/descriptionSection';

import { StyledBenefits, BenefitsContainer } from './styled';

const BenefitsSection = (): JSX.Element => {
  return (
    <StyledBenefits>
      <BenefitsContainer>
        <DescriptionSection />
        <CardsSection />
      </BenefitsContainer>
    </StyledBenefits>
  );
};

export default BenefitsSection;
