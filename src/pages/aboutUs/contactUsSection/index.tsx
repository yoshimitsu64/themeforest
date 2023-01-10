import ContactUsFormBlank from 'components/contactUsForm';
import { StyledContacts } from 'pages/contacts/introductionSection/contacts/styled';
import {
  StyledContactUsSection,
  StyledContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
  StyledSubtitle,
  StyledContactsContainer,
  StyledContact,
  StyledContactTitle,
  StyledContactSubtitle,
} from './styled';

const ContactUsSection = (): JSX.Element => {
  return (
    <StyledContactUsSection>
      <StyledContainer>
        <StyledDescription>
          <StyledTextContainer>
            <StyledTitle>
              Left questions? Contacts us now for a free consultation and free trial!
            </StyledTitle>
            <StyledSubtitle>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </StyledSubtitle>
          </StyledTextContainer>
          <StyledContacts>
            <StyledContactsContainer>
              <StyledContact className="contact">
                <StyledContactTitle>Email adress</StyledContactTitle>
                <StyledContactSubtitle>ensome@info.co.us</StyledContactSubtitle>
              </StyledContact>
              <StyledContact className="contact">
                <StyledContactTitle>Phone number</StyledContactTitle>
                <StyledContactSubtitle>+1601-201-5580</StyledContactSubtitle>
              </StyledContact>
              <StyledContact className="contact">
                <StyledContactTitle>Address</StyledContactTitle>
                <StyledContactSubtitle>
                  1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                </StyledContactSubtitle>
              </StyledContact>
            </StyledContactsContainer>
          </StyledContacts>
        </StyledDescription>
        <ContactUsFormBlank />
      </StyledContainer>
    </StyledContactUsSection>
  );
};

export default ContactUsSection;
