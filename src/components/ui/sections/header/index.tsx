import Logo from 'assets/images/logo_blue.png';
import Navbar from 'components/ui/sections/header/navbar';
import DemoButton from 'components/ui/buttons/demoButton';

import { StyledHeader, StyledLogo } from './styled';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} />
      <Navbar />
      <DemoButton />
    </StyledHeader>
  );
}

export default Header;
