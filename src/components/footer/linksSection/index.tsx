import { SocialIcon } from 'react-social-icons';

import Typography from 'components/typography';
import { useMediaQuery } from 'hooks/index';

import { quickLinks, serviceLinks } from 'constants/links';
import { socialNetworks } from 'constants/socialNetworks';

import {
  StyledLinksSection,
  StyledDescription,
  StyledLogo,
  StyledSocialNetworksLinks,
  StyledQuickLinks,
  StyledQuickLinkTitle,
  StyledQuickLink,
  StyledText,
  StyledFooterLinks,
  StyledLinksSectionDesktopOrTablet,
  StyledFooterLinksDesktopOrTablet,
} from './styled';

function LinksSection(): JSX.Element {
  const { isDesktopOrTablet } = useMediaQuery();

  const Container = isDesktopOrTablet ? StyledLinksSectionDesktopOrTablet : StyledLinksSection;
  const LinksContainer = isDesktopOrTablet ? StyledFooterLinksDesktopOrTablet : StyledFooterLinks;

  return (
    <Container>
      <StyledDescription>
        <StyledLogo />
        <Typography type="paragraph" variant="regular" size={2} color="white" mb={20}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </Typography>
        <StyledSocialNetworksLinks>
          {socialNetworks.map((network) => (
            <SocialIcon
              network={network}
              bgColor="white"
              style={{ width: 24, height: 24 }}
              key={network}
            />
          ))}
        </StyledSocialNetworksLinks>
      </StyledDescription>
      <LinksContainer>
        <StyledQuickLinks>
          <StyledQuickLinkTitle>Quick links</StyledQuickLinkTitle>
          {quickLinks.map(({ title, path, id }) => (
            <StyledQuickLink to={path} key={id}>
              {title}
            </StyledQuickLink>
          ))}
        </StyledQuickLinks>
        <StyledQuickLinks>
          <StyledQuickLinkTitle>Service</StyledQuickLinkTitle>
          {serviceLinks.map(({ title, path, id }) => (
            <StyledQuickLink to={path} key={id}>
              {title}
            </StyledQuickLink>
          ))}
        </StyledQuickLinks>
        <StyledQuickLinks>
          <StyledQuickLinkTitle>Contact info</StyledQuickLinkTitle>
          <StyledText>ensome@info.co.us</StyledText>
          <StyledText>+1 601-201-5580</StyledText>
          <StyledText>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</StyledText>
        </StyledQuickLinks>
      </LinksContainer>
    </Container>
  );
}

export default LinksSection;
