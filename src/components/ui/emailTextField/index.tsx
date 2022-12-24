import EmailButton from 'components/ui/buttons/emailButton';
import { StyledEmailTextField, StyledInput } from './styled';

const EmailTextField = (): JSX.Element => {
  return (
    <StyledEmailTextField>
      <StyledInput placeholder={'Your email'} />
      <EmailButton>Send</EmailButton>
    </StyledEmailTextField>
  );
};

export default EmailTextField;
