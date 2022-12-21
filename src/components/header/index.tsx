import Logo from 'assets/images/logo_blue.png'
import { StyledHeader, StyledLogo } from './styled'
import Navbar from 'components/header/navbar'
import DemoButton from 'components/buttons/demoButton'

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} />
      <Navbar />
      <DemoButton />
    </StyledHeader>
  )
}

export default Header
