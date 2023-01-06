import { IProps } from './types';
import { StyledWrapper } from './styled';

const Wrapper = ({
  variant,
  direction,
  width,
  children,
  justifyContent,
  alignItems,
  ...rest
}: IProps): JSX.Element => {
  return (
    <StyledWrapper
      variant={variant}
      direction={direction}
      width={width}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
