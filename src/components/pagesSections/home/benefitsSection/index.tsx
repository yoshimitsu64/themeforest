import { useMediaQuery } from 'hooks/index';

import CardsSection from 'components/pagesSections/home/benefitsSection/cardsSection';
import DescriptionSection from 'components/pagesSections/home/benefitsSection/descriptionSection';

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
