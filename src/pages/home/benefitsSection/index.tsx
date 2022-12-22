import {
  StyledTitle,
  StyledSubtitle,
  StyledBenefits,
  StyledDescription,
  StyledCardsContainer,
} from './styled';
import Card from 'components/card';

const BenefitsSection = (): JSX.Element => {
  return (
    <StyledBenefits>
      <StyledDescription>
        <StyledTitle>The benefits of Ensome </StyledTitle>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </StyledSubtitle>
      </StyledDescription>
      <StyledCardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCardsContainer>
    </StyledBenefits>
  );
};

export default BenefitsSection;
