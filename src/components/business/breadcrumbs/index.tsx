import { useLocation } from 'react-router-dom';

import { StyledBreadcrumbs, StyledLink } from './styled';

interface IProps {
  page: string;
}

function Breadcrumbs({ page }: IProps): JSX.Element {
  const location = useLocation();

  return (
    <StyledBreadcrumbs>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to={`${location.pathname}`}>{page}</StyledLink>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
