import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';
import ContactForm from 'pages/contacts/introductionSection/contactForm';
import Contacts from 'pages/contacts/introductionSection/contacts';

import { StyledIntroductionSection, StyledContainer, StyledContent } from './styled';

function IntroductionSection(): JSX.Element {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Contacts" url="contacts" />
        <StyledContent>
          <Typography type="headLine" variant="extraBold" size={3}>
            How can we
            <Typography type="headLine" variant="extraBold" size={3} color="primary">
              help you?
            </Typography>
          </Typography>
          <ContactForm />
        </StyledContent>
        <Contacts />
      </StyledContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
