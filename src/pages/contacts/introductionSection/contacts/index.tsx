import { Call16Filled, Location16Filled, Mail16Filled } from '@fluentui/react-icons';

import {
  StyledContacts,
  StyledContactCard,
  StyledContactTitle,
  StyledContactDescription,
} from './styled';

function Contacts(): JSX.Element {
  return (
    <StyledContacts>
      <StyledContactCard>
        <StyledContactTitle>
          <Mail16Filled /> Email
        </StyledContactTitle>
        <StyledContactDescription>ensome@info.co.us</StyledContactDescription>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactTitle>
          <Call16Filled /> Phone
        </StyledContactTitle>
        <StyledContactDescription>+1 601-201-5580</StyledContactDescription>
      </StyledContactCard>
      <StyledContactCard>
        <StyledContactTitle>
          <Location16Filled /> Address
        </StyledContactTitle>
        <StyledContactDescription>1642 Washington Ave, Jackson, MS</StyledContactDescription>
      </StyledContactCard>
    </StyledContacts>
  );
}

export default Contacts;
