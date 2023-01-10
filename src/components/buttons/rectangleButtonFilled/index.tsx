import { StyledButton } from './styled';

interface IProps {
  text?: string;
  width?: string;
  onClick?: () => void;
}

function RectangleButtonFilled({ text = 'text', width = '100', onClick }: IProps): JSX.Element {
  return (
    <StyledButton width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default RectangleButtonFilled;
