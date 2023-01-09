import Typography from 'components/business/typography';
import { useNavigate } from 'react-router-dom';

import LargeButtonFill from 'components/ui/buttons/largeButtonFill';

import { StyledContactUsSection } from './styled';

function ContactUsSection(): JSX.Element {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate('/contacts');
  };
  return (
    <StyledContactUsSection>
      <Typography type="headLine" variant="extraBold" size={1} mb={20} textAlign="center">
        Do you need help?
      </Typography>
      <Typography
        type="paragraph"
        variant="regular"
        size={1}
        mb={20}
        width={540}
        textAlign="center"
      >
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi.
      </Typography>
      <LargeButtonFill onClick={handleCLick}>Contact us</LargeButtonFill>
    </StyledContactUsSection>
  );
}

export default ContactUsSection;
