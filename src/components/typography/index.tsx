import { IProps } from './types';

import { StyledTypography } from './styled';

const Typography = ({
  type,
  variant,
  size,
  color = 'black',
  children,
  ...rest
}: IProps): JSX.Element => {
  return (
    <StyledTypography size={size} variant={variant} type={type} color={color} {...rest}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
