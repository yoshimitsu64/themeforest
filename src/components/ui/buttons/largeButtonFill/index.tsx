import { StyledLargeButton } from './styled';

interface IProps {
  onClick?: () => void;
  children?: string;
}

export const LargeButtonFill = ({ onClick, children }: IProps): JSX.Element => {
  return <StyledLargeButton onClick={onClick}>{children}</StyledLargeButton>;
};

export default LargeButtonFill;
