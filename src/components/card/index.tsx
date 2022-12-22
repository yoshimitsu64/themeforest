import { BrainCircuitFilled } from '@fluentui/react-icons';
import { StyledCard, StyledImage, StyledTitle, StyledSubtitle } from './styled';

const Card = (): JSX.Element => {
  return (
    <StyledCard className="card">
      <StyledImage>
        <BrainCircuitFilled />
      </StyledImage>
      <StyledTitle>Machine learning</StyledTitle>
      <StyledSubtitle>
        At vero eos et accusamus et iusto odio dignissimos duciu quili blandit
        praesentium voluptatum ipsa quae ab illo.
      </StyledSubtitle>
    </StyledCard>
  );
};

export default Card;
