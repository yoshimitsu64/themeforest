import { useMediaQuery } from 'hooks/useMediaQuery';

import CardsSection from 'pages/home/benefitsSection/cardsSection';
import DescriptionSection from 'pages/home/benefitsSection/descriptionSection';

import {
  StyledBenefitsSection,
  BenefitsDesktopContainer,
  BenefitsTabletContainer,
  StyledBenefitsSectionMobile,
} from './styled';

function BenefitsSectionDesktop(): JSX.Element {
  const { isTablet, isMobile } = useMediaQuery();

  const Container = isTablet || isMobile ? BenefitsTabletContainer : BenefitsDesktopContainer;
  const Section = isTablet || isMobile ? StyledBenefitsSectionMobile : StyledBenefitsSection;

  return (
    <Section>
      <Container>
        <DescriptionSection />
        <CardsSection />
      </Container>
    </Section>
  );
}

export default BenefitsSectionDesktop;
