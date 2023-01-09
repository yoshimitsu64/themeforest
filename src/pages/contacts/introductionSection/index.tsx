import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';
import { useMediaQueryNew } from 'hooks/useMediaQueryNew';
import ContactForm from 'pages/contacts/introductionSection/contactForm';
import Contacts from 'pages/contacts/introductionSection/contacts';

import {
  StyledIntroductionSection,
  StyledContainer,
  StyledContent,
  StyledContentMobile,
} from './styled';

function IntroductionSection(): JSX.Element {
  const { isMobile, isDesktop, isDesktopOrTablet, isTablet } = useMediaQueryNew();

  const Content = isMobile ? StyledContentMobile : StyledContent;

  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <Breadcrumbs page="Contacts" url="contacts" />
        <Content>
          {isMobile && (
            <Typography type="headLine" variant="extraBold" size={2} element="span" mt={20} mb={10}>
              How can we{' '}
              <Typography
                type="headLine"
                variant="extraBold"
                size={2}
                color="primary"
                element="span"
              >
                help you?
              </Typography>
            </Typography>
          )}
          {(isDesktop || isDesktopOrTablet || isTablet) && (
            <Typography type="headLine" variant="extraBold" size={3}>
              How can we
              <Typography type="headLine" variant="extraBold" size={3} color="primary">
                help you?
              </Typography>
            </Typography>
          )}
          <ContactForm />
        </Content>
        <Contacts />
      </StyledContainer>
    </StyledIntroductionSection>
  );
}

export default IntroductionSection;
