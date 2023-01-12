import { useMediaQuery } from 'hooks/index';

import Breadcrumbs from 'components/breadcrumbs';
import Typography from 'components/typography';

import ContactForm from 'components/pagesSections/contacts/introductionSection/contactForm';
import Contacts from 'components/pagesSections/contacts/introductionSection/contacts';

import {
  StyledIntroductionSection,
  StyledContainer,
  StyledContent,
  StyledContentMobile,
} from './styled';

function IntroductionSection(): JSX.Element {
  const { isMobile, isDesktop, isDesktopOrTablet, isTablet } = useMediaQuery();

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
