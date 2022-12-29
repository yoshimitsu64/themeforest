import EmailTextField from 'components/business/emailTextField';

import { StyledContainer, StyledDescription, StyledTitle, StyledSubtitle } from './styled';

function SubscribeUsSection(): JSX.Element {
  return (
    <StyledContainer>
      <StyledDescription>
        <StyledTitle>Subscribe to our newsletter</StyledTitle>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
        </StyledSubtitle>
      </StyledDescription>
      <EmailTextField />
    </StyledContainer>
  );
}

export default SubscribeUsSection;
