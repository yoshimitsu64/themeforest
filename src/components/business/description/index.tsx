import useMediaQuery from 'hooks/useMediaQuery';
import { StyledDescription } from './styled';

interface IProps {
  children: JSX.Element[];
}

function Description({ children }: IProps): JSX.Element {
  const isMobile = useMediaQuery(640);

  return <StyledDescription isMobile={isMobile}>{children}</StyledDescription>;
}

export default Description;
