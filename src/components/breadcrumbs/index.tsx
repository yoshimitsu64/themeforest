import { memo } from 'react';

import { StyledBreadcrumbs, StyledLink } from './styled';

interface IProps {
  page: string;
  color?: 'black' | 'white' | 'grey';
  url: string;
}

function Breadcrumbs({ page, color = 'grey', url }: IProps): JSX.Element {
  return (
    <StyledBreadcrumbs color={color}>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to={`/${url}`}>{page}</StyledLink>
    </StyledBreadcrumbs>
  );
}

export default memo(Breadcrumbs);
