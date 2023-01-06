import { useMemo } from 'react';

import useMediaQuery from 'hooks/useMediaQuery';
import CardsSection from 'pages/home/benefitsSection/cardsSection';
import DescriptionSection from 'pages/home/benefitsSection/descriptionSection';

import { StyledBenefitsSection, BenefitsDesktopContainer, BenefitsTabletContainer } from './styled';

function BenefitsSectionDesktop(): JSX.Element {
  const isTablet = useMediaQuery(1110);

  const content = useMemo(
    () => (
      <>
        <DescriptionSection />
        <CardsSection />
      </>
    ),
    []
  );

  if (isTablet) {
    return (
      <StyledBenefitsSection>
        <BenefitsTabletContainer>{content}</BenefitsTabletContainer>
      </StyledBenefitsSection>
    );
  }
  return (
    <StyledBenefitsSection>
      <BenefitsDesktopContainer>{content}</BenefitsDesktopContainer>
    </StyledBenefitsSection>
  );
}

export default BenefitsSectionDesktop;
