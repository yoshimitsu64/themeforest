import { routes } from 'constants/routes'
import { StyledNavbar, StyledLink } from './styled'

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbar>
      {routes.map((route) => (
        <StyledLink to="/" key={route}>
          {route}
        </StyledLink>
      ))}
    </StyledNavbar>
  )
}

export default Navbar
