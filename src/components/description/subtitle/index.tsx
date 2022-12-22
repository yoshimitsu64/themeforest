import { StyledSubtitle } from './styled';

interface IProps {
  children: string;
  variant: string;
  size: number;
}

const Subtitle = ({ children, variant, size }: IProps): JSX.Element => {
  return (
    <StyledSubtitle size={size} variant={variant}>
      {children}
    </StyledSubtitle>
  );
};

export default Subtitle;
