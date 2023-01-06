import useMediaQuery from 'hooks/useMediaQuery';

import { IProps } from './types';
import { StyledSubtitle } from './styled';

function Subtitle({ children, variant, size }: IProps): JSX.Element {
  const isMobile = useMediaQuery(640);

  return (
    <StyledSubtitle size={size} variant={variant} isMobile={isMobile}>
      {children}
    </StyledSubtitle>
  );
}

export default Subtitle;
