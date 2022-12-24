import { StyledEmailButton } from './styled';

interface IProps {
  children?: string | JSX.Element;
  onClick?: () => void;
}

const EmailButton = ({ children, onClick }: IProps): JSX.Element => {
  return <StyledEmailButton onClick={onClick}>{children}</StyledEmailButton>;
};

export default EmailButton;
