import { StyledLargeButton } from './styled';

interface IProps {
  onClick?: () => void;
  children?: string;
}

export function LargeButtonFill({ onClick, children }: IProps): JSX.Element {
  return <StyledLargeButton onClick={onClick}>{children}</StyledLargeButton>;
}

export default LargeButtonFill;
