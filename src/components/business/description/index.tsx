import { StyledDescription } from './styled';

interface IProps {
  children: JSX.Element[];
}

function Description({ children }: IProps): JSX.Element {
  return <StyledDescription>{children}</StyledDescription>;
}

export default Description;
