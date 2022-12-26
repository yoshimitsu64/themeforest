import SubscribeUsSection from 'components/ui/footer/subscribeUsSection';
import LinksSection from 'components/ui/footer/linksSection';
import FooterBottom from 'components/ui/footer/footerBottom';
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
