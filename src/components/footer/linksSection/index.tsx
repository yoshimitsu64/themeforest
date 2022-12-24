import { SocialIcon } from 'react-social-icons';

import { quickLinks, serviceLinks } from 'constants/routes';
import { socialNetworks } from 'constants/newtworks';

import {
  StyledLinksSection,
  StyledDescription,
  StyledLogo,
  StyledSubtitle,
  StyledSocialNetworksLinks,
  StyledQuickLinks,
  StyledQuickLinkTitle,
  StyledQuickLink,
  StyledText,
  StyledFooterLinks,
} from './styled';

const LinksSection = (): JSX.Element => {
  return (
    <StyledLinksSection>
      <StyledDescription>
        <StyledLogo />
        <StyledSubtitle>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </StyledSubtitle>
        <StyledSocialNetworksLinks>
          {socialNetworks.map((network) => (
            <SocialIcon
              network={network}
              bgColor={'white'}
              style={{ width: 24, height: 24 }}
              key={network}
            />
          ))}
        </StyledSocialNetworksLinks>
      </StyledDescription>
      <StyledFooterLinks>
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
          <StyledText>
            1642 Washington Avenue, Jackson, MS, Mississippi, 39201
          </StyledText>
        </StyledQuickLinks>
      </StyledFooterLinks>
    </StyledLinksSection>
  );
};

export default LinksSection;
