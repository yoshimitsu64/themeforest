import { CheckmarkFilled } from '@fluentui/react-icons';

import {
  StyledAdvantagesSection,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledAdvatageContainer,
  StyledAdvantage,
  StyledText,
} from './styled';

const AdvantagesSection = (): JSX.Element => {
  return (
    <StyledAdvantagesSection>
      <StyledImage />
      <StyledDescription>
        <StyledTitle>Why choose us?</StyledTitle>
        <StyledAdvatageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Machine learning</span>
          </StyledAdvantage>
          <StyledText>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </StyledText>
        </StyledAdvatageContainer>
        <StyledAdvatageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Embed analytics</span>
          </StyledAdvantage>
          <StyledText>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </StyledText>
        </StyledAdvatageContainer>
        <StyledAdvatageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Access control</span>
          </StyledAdvantage>
          <StyledText>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </StyledText>
        </StyledAdvatageContainer>
      </StyledDescription>
    </StyledAdvantagesSection>
  );
};

export default AdvantagesSection;
