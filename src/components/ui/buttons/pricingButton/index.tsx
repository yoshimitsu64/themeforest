import React from 'react';

import { StyledButton } from './styled';

interface IProps {
  text?: 'Mo' | 'Yr';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function PricingButton({ text, onClick }: IProps): JSX.Element {
  return (
    <StyledButton text={text} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default PricingButton;
