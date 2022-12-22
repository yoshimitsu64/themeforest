import { routes } from 'constants/routes';
import { StyledNavbar, StyledLink } from './styled';

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbar>
      {routes.map(({ title, id, path }) => (
        <StyledLink to={path} key={id}>
          {title}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
