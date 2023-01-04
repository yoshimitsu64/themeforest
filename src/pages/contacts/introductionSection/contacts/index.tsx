import { Call16Filled, Location16Filled, Mail16Filled } from '@fluentui/react-icons';
import Typography from 'components/business/typography';

import {
  StyledContacts,
  StyledContactCard,
  StyledContactHeader,
  StyledContactDescription,
} from './styled';

function Contacts(): JSX.Element {
  return (
    <StyledContacts>
      <StyledContactCard>
        <StyledContactHeader>
          <Mail16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Email
          </Typography>
        </StyledContactHeader>
        <StyledContactDescription>ensome@info.co.us</StyledContactDescription>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactHeader>
          <Call16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Phone
          </Typography>
        </StyledContactHeader>
        <StyledContactDescription>+1 601-201-5580</StyledContactDescription>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactHeader>
          <Location16Filled />
          <Typography type="headLine" variant="semiBold" size={0}>
            Address
          </Typography>
        </StyledContactHeader>
        <StyledContactDescription>1642 Washington Ave, Jackson, MS</StyledContactDescription>
      </StyledContactCard>
    </StyledContacts>
  );
}

export default Contacts;
