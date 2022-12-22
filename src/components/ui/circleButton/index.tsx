import {
  StyledCircleButton,
  StyledInternalCircle,
  StyledWhiteBackground,
} from './styled';

interface IProps {
  children: string;
}

const CircleButton = ({ children }: IProps): JSX.Element => {
  return (
    <StyledWhiteBackground>
      <StyledCircleButton>
        <StyledInternalCircle>{children}</StyledInternalCircle>
      </StyledCircleButton>
    </StyledWhiteBackground>
  );
};

export default CircleButton;
