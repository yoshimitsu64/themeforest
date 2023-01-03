import { StyledLargeButton } from './styled';

interface IProps {
  onClick?: () => void;
  children?: string;
}

export function LargeButtonFill({ onClick, children }: IProps): JSX.Element {
  return (
    <StyledLargeButton onClick={onClick} type="submit">
      {children}
    </StyledLargeButton>
  );
}

export default LargeButtonFill;
