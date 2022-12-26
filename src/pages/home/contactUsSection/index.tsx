import LargeButtonFill from 'components/ui/buttons/largeButtonFill';

import {
  StyledContactUsSection,
  StyledContactUsTitle,
  StyledContactUsSubtitle,
} from './styled';

const ContactUsSection = (): JSX.Element => {
  return (
    <StyledContactUsSection>
      <StyledContactUsTitle>Do you need help?</StyledContactUsTitle>
      <StyledContactUsSubtitle>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </StyledContactUsSubtitle>
      <LargeButtonFill>Contact us</LargeButtonFill>
    </StyledContactUsSection>
  );
};

export default ContactUsSection;
