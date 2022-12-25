import { StyledButton } from './styled';

interface IProps {
  text?: 'Mo' | 'Yr';
  onClick?: (e: any) => void;
}

const PricingButton = ({ text, onClick }: IProps): JSX.Element => {
  return (
    <StyledButton text={text} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default PricingButton;
