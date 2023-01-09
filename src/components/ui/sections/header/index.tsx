import { useCallback, useState } from 'react';
import { Dismiss24Filled, Navigation24Filled } from '@fluentui/react-icons';

import Logo from 'assets/images/logo/logo_blue.png';

import { useMediaQueryNew } from 'hooks/useMediaQueryNew';

import BurgerMenu from 'components/business/burgerMenu';
import Navbar from 'components/ui/sections/header/navbar';
import DemoButton from 'components/ui/buttons/demoButton';

import {
  StyledHeader,
  StyledLogo,
  StyledContent,
  StyledContentMobile,
  StyledBurger,
} from './styled';

const Header = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);

  const { isDesktopOrTablet, isDesktop } = useMediaQueryNew();

  const Content = isDesktopOrTablet ? StyledContentMobile : StyledContent;

  const handleClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <StyledHeader>
      <Content>
        <StyledLogo src={Logo} />
        {isDesktop && (
          <>
            <Navbar />
            <DemoButton />
          </>
        )}
        {!isDesktop && (
          <StyledBurger>
            {isOpened ? (
              <Dismiss24Filled onClick={handleClick} />
            ) : (
              <Navigation24Filled onClick={handleClick} />
            )}
          </StyledBurger>
        )}
      </Content>
      {isOpened && <BurgerMenu handleClick={handleClick} />}
    </StyledHeader>
  );
};

export default Header;
