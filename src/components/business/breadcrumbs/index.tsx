import { useLocation } from 'react-router-dom';

import { StyledBreadcrumbs, StyledLink } from './styled';

interface IProps {
  page: string;
  color?: 'black' | 'white' | 'grey';
}

function Breadcrumbs({ page, color = 'grey' }: IProps): JSX.Element {
  const location = useLocation();

  return (
    <StyledBreadcrumbs color={color}>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to={location.pathname}>{page}</StyledLink>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
