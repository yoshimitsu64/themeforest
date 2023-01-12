import { links } from 'constants/links';
import { StyledNavbar, StyledLink } from './styled';

function Navbar(): JSX.Element {
  return (
    <StyledNavbar>
      {links.map(({ title, id, path }) => (
        <StyledLink to={path} key={id}>
          {title}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;
