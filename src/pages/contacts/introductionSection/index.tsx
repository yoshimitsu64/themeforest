import Breadcrumbs from 'components/business/breadcrumbs';
import ContactForm from 'pages/contacts/introductionSection/contactForm';
import Contacts from 'pages/contacts/introductionSection/contacts';

import {
  StyledIntroductionSection,
  StyledContainer,
  StyledContent,
  StyledText,
  StyledHighlightText,
} from './styled';

function IntroductionSection(): JSX.Element {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Contacts" />
        <StyledContent>
          <StyledText>
            How can we <StyledHighlightText>help you?</StyledHighlightText>
          </StyledText>
          <ContactForm />
        </StyledContent>
        <Contacts />
      </StyledContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
