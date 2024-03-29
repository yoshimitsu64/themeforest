import { useMediaQuery } from 'hooks/index';

import EmailTextField from 'components/fields/emailTextField';
import Typography from 'components/typography';

import { StyledContainer, StyledContainerDesktopOrTablet } from './styled';

function SubscribeUsSection(): JSX.Element {
  const { isDesktopOrTablet } = useMediaQuery();

  const Container = isDesktopOrTablet ? StyledContainerDesktopOrTablet : StyledContainer;

  return (
    <Container>
      <Typography type="headLine" variant="extraBold" size={1} color="white" width={540} mb={20}>
        Subscribe to our newsletter
        {!isDesktopOrTablet && (
          <Typography type="paragraph" variant="regular" size={0} color="white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </Typography>
        )}
      </Typography>
      <EmailTextField />
    </Container>
  );
}

export default SubscribeUsSection;
