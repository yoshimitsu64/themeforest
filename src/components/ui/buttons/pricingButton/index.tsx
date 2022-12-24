import { StyledButton } from './styled';

interface IProps {
  text?: 'Mo' | 'Yr';
}

const PricingButton = ({ text }: IProps): JSX.Element => {
  return <StyledButton text={text}>{text}</StyledButton>;
};

export default PricingButton;
