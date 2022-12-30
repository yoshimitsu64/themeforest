import { useNavigate } from 'react-router-dom';

import LargeButtonFill from 'components/ui/buttons/largeButtonFill';

import { StyledContactUsSection, StyledContactUsTitle, StyledContactUsSubtitle } from './styled';

function ContactUsSection(): JSX.Element {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate('/contacts');
  };
  return (
    <StyledContactUsSection>
      <StyledContactUsTitle>Do you need help?</StyledContactUsTitle>
      <StyledContactUsSubtitle>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi.
      </StyledContactUsSubtitle>
      <LargeButtonFill onClick={handleCLick}>Contact us</LargeButtonFill>
    </StyledContactUsSection>
  );
}

export default ContactUsSection;
