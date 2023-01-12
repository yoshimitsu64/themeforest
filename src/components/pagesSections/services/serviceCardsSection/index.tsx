import { serviceCardsMocks } from 'mocks/index';

import { useMediaQuery } from 'hooks/index';

import ServiceCard from 'components/cards/serviceCard';

import { StyledServiceCardsSection, StyledContainer, StyledMobileContainer } from './styled';

function ServiceCardsSection(): JSX.Element {
  const { isMobile } = useMediaQuery();

  const child = serviceCardsMocks.map(({ image, title, subtitle }, index) => (
    <ServiceCard imageURL={image} title={title} key={index}>
      {subtitle}
    </ServiceCard>
  ));

  return (
    <StyledServiceCardsSection>
      {isMobile ? (
        <StyledMobileContainer>{child}</StyledMobileContainer>
      ) : (
        <StyledContainer>{child}</StyledContainer>
      )}
    </StyledServiceCardsSection>
  );
}

export default ServiceCardsSection;
