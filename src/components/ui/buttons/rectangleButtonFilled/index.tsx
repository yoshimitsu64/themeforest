import { StyledButton } from './styled';

interface IProps {
  text?: string;
  width?: string;
  onClick?: () => void;
}

const RectangleButtonFilled = ({
  text,
  width,
  onClick,
}: IProps): JSX.Element => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default RectangleButtonFilled;
