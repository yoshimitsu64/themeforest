import {
  ArrowTrendingLinesFilled,
  BrainCircuitFilled,
  DataAreaFilled,
  KeyFilled,
} from '@fluentui/react-icons';

import Card from 'components/ui/cards/card';

import {
  StyledCardImage,
  StyledCardsContainer,
  StyledCardSubtitle,
  StyledCardTitle,
} from './styled';

function CardsSection(): JSX.Element {
  return (
    <StyledCardsContainer>
      <Card>
        <StyledCardImage>
          <BrainCircuitFilled />
        </StyledCardImage>
        <StyledCardTitle>Machine learning</StyledCardTitle>
        <StyledCardSubtitle>
          At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
          voluptatum ipsa quae ab illo.
        </StyledCardSubtitle>
      </Card>
      <Card>
        <StyledCardImage>
          <KeyFilled />
        </StyledCardImage>
        <StyledCardTitle>Access control</StyledCardTitle>
        <StyledCardSubtitle>
          At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
          voluptatum ipsa quae ab illo.
        </StyledCardSubtitle>
      </Card>
      <Card>
        <StyledCardImage>
          <ArrowTrendingLinesFilled />
        </StyledCardImage>
        <StyledCardTitle>Embed analytics</StyledCardTitle>
        <StyledCardSubtitle>
          At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
          voluptatum ipsa quae ab illo.
        </StyledCardSubtitle>
      </Card>
      <Card>
        <StyledCardImage>
          <DataAreaFilled />
        </StyledCardImage>
        <StyledCardTitle>Data analytics</StyledCardTitle>
        <StyledCardSubtitle>
          At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
          voluptatum ipsa quae ab illo.
        </StyledCardSubtitle>
      </Card>
    </StyledCardsContainer>
  );
}

export default CardsSection;
