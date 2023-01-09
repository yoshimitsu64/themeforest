import Breadcrumbs from 'components/business/breadcrumbs';
import Typography from 'components/business/typography';
import { useMediaQueryNew } from 'hooks/useMediaQueryNew';

import Image from 'assets/images/ourTeam/image10.png';

import {
  StyledIntroductionSection,
  StyledContainer,
  StyledDescription,
  StyledIntroductionSectionMobile,
  StyledContainerMobile,
  StyledDescriptionMobile,
  StyledImage,
} from './styled';

const IntroductionSection = (): JSX.Element => {
  const { isMobile } = useMediaQueryNew();

  const Section = isMobile ? StyledIntroductionSectionMobile : StyledIntroductionSection;
  const Container = isMobile ? StyledContainerMobile : StyledContainer;

  return (
    <Section>
      <Container>
        {isMobile ? (
          <Breadcrumbs page="Our team" url="our-team" color="black" />
        ) : (
          <Breadcrumbs page="Our team" url="our-team" color="white" />
        )}
        {!isMobile && (
          <StyledDescription>
            <Typography type="headLine" size={0} variant="extraBold" color="white" width={540}>
              Our team
            </Typography>
            <Typography
              type="paragraph"
              variant="regular"
              size={2}
              color="grey"
              width={540}
              ml={40}
            >
              Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
              laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
              consectetur.
              <br />
              <br />
              Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
              tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
              commodo libero.
            </Typography>
          </StyledDescription>
        )}
        {isMobile && (
          <>
            <StyledDescriptionMobile>
              <Typography type="headLine" size={2} variant="bold" color="primary" mt={40}>
                Our team
              </Typography>
              <Typography type="headLine" variant="extraBold" size={2} mb={10} textAlign="center">
                Get to know us closer
              </Typography>
              <Typography type="paragraph" variant="regular" size={2} color="grey" mb={50}>
                Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
                laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
                consectetur.
              </Typography>
            </StyledDescriptionMobile>
            <StyledImage src={Image} />
            <Typography type="paragraph" variant="regular" size={2} color="grey" mb={50} mt={40}>
              Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
              euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia
              auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
            </Typography>
            <Typography type="paragraph" variant="regular" size={2} color="grey" mb={50}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur
              eros non iaculis.
            </Typography>
          </>
        )}
      </Container>
    </Section>
  );
};

export default IntroductionSection;
