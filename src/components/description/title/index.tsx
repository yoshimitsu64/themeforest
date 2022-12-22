import { StyledTitle } from './styled';

interface IProps {
  children: JSX.Element;
  variant: string;
  size: number;
}

const Title = ({ children, variant, size }: IProps): JSX.Element => {
  return (
    <StyledTitle variant={variant} size={size}>
      {children}
    </StyledTitle>
  );
};

export default Title;