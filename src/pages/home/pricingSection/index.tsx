import { CheckmarkFilled } from '@fluentui/react-icons';

import PricingCard from 'components/ui/cards/pricingCard';

import {
  StyledPricingSection,
  StyledPricingSectionTitle,
  StyledPossibility,
  StyledPricingCardsContainer,
} from './styled';

function PricingSection(): JSX.Element {
  return (
    <StyledPricingSection>
      <StyledPricingSectionTitle>Our pricing</StyledPricingSectionTitle>
      <StyledPricingCardsContainer>
        <PricingCard title="Free trial" price="$0">
          <StyledPossibility>
            <CheckmarkFilled /> <span>For small teams – 5 users</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Community support</span>
          </StyledPossibility>
        </PricingCard>
        <PricingCard title="Lite" price="$40">
          <StyledPossibility>
            <CheckmarkFilled /> <span>For small teams – 15 users</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Individual support</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Individual data – 60GB</span>
          </StyledPossibility>
        </PricingCard>
        <PricingCard title="Basic" price="$99">
          <StyledPossibility>
            <CheckmarkFilled /> <span>For big teams – 30 users</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Individual support</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Individual data – 120GB</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Advanced permissions</span>
          </StyledPossibility>
        </PricingCard>
        <PricingCard title="For enterprise" price="Custom">
          <StyledPossibility>
            <CheckmarkFilled /> <span>Unlimited team members</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Individual support</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Unlimited Individual data</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Advanced permissions</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Data history</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>Audit log</span>
          </StyledPossibility>
          <StyledPossibility>
            <CheckmarkFilled /> <span>All functions included</span>
          </StyledPossibility>
        </PricingCard>
      </StyledPricingCardsContainer>
    </StyledPricingSection>
  );
}

export default PricingSection;
