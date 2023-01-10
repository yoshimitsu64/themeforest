import { memo } from 'react';

import Typography from 'components/typography';
import { links } from 'constants/links';

import { IProps } from './types';
import { StyledBurgerMenu, StyledBurgerItem } from './styled';

const BurgerMenu = ({ handleClick }: IProps): JSX.Element => {
  return (
    <StyledBurgerMenu>
      {links.map(({ title, id, path }) => (
        <StyledBurgerItem to={path} key={id} onClick={handleClick}>
          <Typography type="headLine" variant="bold" size={2} color="black">
            {title}
          </Typography>
        </StyledBurgerItem>
      ))}
    </StyledBurgerMenu>
  );
};

export default memo(BurgerMenu);
