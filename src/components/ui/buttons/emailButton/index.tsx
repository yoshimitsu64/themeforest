import { MouseEventHandler, memo } from 'react';

import { InputVariant } from 'appTypes/index';

import { StyledEmailButton } from './styled';

interface IProps {
  onClick?: MouseEventHandler<HTMLInputElement>;
  variant: InputVariant['variant'];
  value: string;
  color?: InputVariant['color'];
}

const EmailButton = ({ onClick, value, variant, color = 'white' }: IProps): JSX.Element => {
  const disabled = variant === 'error' || variant === 'disabled';

  return (
    <StyledEmailButton
      value={value}
      type="submit"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      color={color}
    />
  );
};

export default memo(EmailButton);
