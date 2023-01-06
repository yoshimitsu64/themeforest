import EmailTextField from 'components/business/emailTextField';
import useMediaQuery from 'hooks/useMediaQuery';

import { StyledContainer, StyledDescription, StyledTitle, StyledSubtitle } from './styled';

function SubscribeUsSection(): JSX.Element {
  const isMobile = useMediaQuery(1000);

  return (
    <StyledContainer isMobile={isMobile}>
      <StyledDescription>
        <StyledTitle>Subscribe to our newsletter</StyledTitle>
        {!isMobile && (
          <StyledSubtitle>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </StyledSubtitle>
        )}
      </StyledDescription>
      <EmailTextField />
    </StyledContainer>
  );
}

export default SubscribeUsSection;
