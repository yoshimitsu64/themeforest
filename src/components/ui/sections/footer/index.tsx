import SubscribeUsSection from 'components/ui/sections/footer/subscribeUsSection';
import LinksSection from 'components/ui/sections/footer/linksSection';
import FooterBottom from 'components/ui/sections/footer/footerBottom';
import { StyledFooter } from './styled';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <SubscribeUsSection />
      <LinksSection />
      <FooterBottom />
    </StyledFooter>
  );
};

export default Footer;
