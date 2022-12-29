import { StyledCircleButton, StyledInternalCircle, StyledWhiteBackground } from './styled';

interface IProps {
  children: string;
  onClick?: () => void;
}

function CircleButton({ children, onClick }: IProps): JSX.Element {
  return (
    <StyledWhiteBackground>
      <StyledCircleButton onClick={onClick}>
        <StyledInternalCircle>{children}</StyledInternalCircle>
      </StyledCircleButton>
    </StyledWhiteBackground>
  );
}

export default CircleButton;
