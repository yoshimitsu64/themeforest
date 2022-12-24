import SubscribeUsSection from 'components/footer/subscribeUsSection';
import LinksSection from 'components/footer/linksSection';
import FooterBottom from 'components/footer/footerBottom';
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
