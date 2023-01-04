import { CheckmarkFilled } from '@fluentui/react-icons';
import Typography from 'components/business/typography';

import {
  StyledAdvantagesSection,
  StyledImage,
  StyledDescription,
  StyledAdvantageContainer,
  StyledAdvantage,
} from './styled';

const AdvantagesSection = (): JSX.Element => {
  return (
    <StyledAdvantagesSection>
      <StyledImage />
      <StyledDescription>
        <Typography type="headLine" variant="extraBold" size={1}>
          Why choose us?
        </Typography>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Machine learning</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Embed analytics</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
        <StyledAdvantageContainer>
          <StyledAdvantage>
            <CheckmarkFilled /> <span>Access control</span>
          </StyledAdvantage>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores.
          </Typography>
        </StyledAdvantageContainer>
      </StyledDescription>
    </StyledAdvantagesSection>
  );
};

export default AdvantagesSection;
