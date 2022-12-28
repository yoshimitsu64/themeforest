import { StyledServiceCardsSection, StyledContainer } from './styled';
import { serviceCardTestData } from 'constants/serviceCardTestData';
import ServiceCard from 'components/ui/cards/serviceCard';

const ServiceCardsSection = (): JSX.Element => {
  return (
    <StyledServiceCardsSection>
      <StyledContainer>
        {new Array(6)
          .fill({
            image: serviceCardTestData.image,
            title: serviceCardTestData.title,
            subtitle: serviceCardTestData.subtitle,
          })
          .map(({ image, title, subtitle }, index) => (
            <ServiceCard imageURL={image} title={title} key={index}>
              {subtitle}
            </ServiceCard>
          ))}
      </StyledContainer>
    </StyledServiceCardsSection>
  );
};

export default ServiceCardsSection;
