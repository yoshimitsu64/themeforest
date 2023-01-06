import useMediaQuery from 'hooks/useMediaQuery';

import { IProps } from './types';
import { StyledTitle } from './styled';

function Title({ children, variant, size }: IProps): JSX.Element {
  const isMobile = useMediaQuery(640);

  return (
    <StyledTitle variant={variant} size={size} isMobile={isMobile}>
      {children}
    </StyledTitle>
  );
}

export default Title;
