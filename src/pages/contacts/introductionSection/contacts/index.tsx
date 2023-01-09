import { Call16Filled, Location16Filled, Mail16Filled } from '@fluentui/react-icons';
import Typography from 'components/business/typography';
import { useMediaQueryNew } from 'hooks/useMediaQueryNew';

import {
  StyledContacts,
  StyledContactCard,
  StyledContactHeader,
  StyledContactsMobile,
} from './styled';

function Contacts(): JSX.Element {
  const { isMobile } = useMediaQueryNew();

  const Container = isMobile ? StyledContactsMobile : StyledContacts;

  return (
    <Container>
      <StyledContactCard>
        <StyledContactHeader>
          <Mail16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Email
          </Typography>
        </StyledContactHeader>
        <Typography type="paragraph" variant="regular" size={1} color="grey">
          ensome@info.co.us
        </Typography>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactHeader>
          <Call16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Phone
          </Typography>
        </StyledContactHeader>
        <Typography type="paragraph" variant="regular" size={1} color="grey">
          +1 601-201-5580
        </Typography>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactHeader>
          <Location16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Address
          </Typography>
        </StyledContactHeader>
        <Typography type="paragraph" variant="regular" size={1} color="grey">
          1642 Washington Ave, Jackson, MS
        </Typography>
      </StyledContactCard>
    </Container>
  );
}

export default Contacts;
