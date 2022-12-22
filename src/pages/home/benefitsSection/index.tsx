import CardsSection from 'pages/home/benefitsSection/cardsSection';
import DescriptionSection from 'pages/home/benefitsSection/descriptionSection';

import { StyledBenefits } from './styled';

const BenefitsSection = (): JSX.Element => {
  return (
    <StyledBenefits>
      <DescriptionSection />
      <CardsSection />
    </StyledBenefits>
  );
};

export default BenefitsSection;
