import { memo } from 'react';

import {
  StyledPaymentCard,
  StyledPaymentCardTitle,
  StyledPaymentCardPrice,
  StyledPaymentCardPossibilities,
} from './styled';

interface IProps {
  price: string;
  children: JSX.Element;
  subscribeVariant: string;
}

const PaymentCard = ({ price, children, subscribeVariant }: IProps): JSX.Element => {
  const subscribe = subscribeVariant === 'Mo' ? 'Month subscribe' : 'Year subscribe';

  return (
    <StyledPaymentCard>
      <StyledPaymentCardTitle>{subscribe}</StyledPaymentCardTitle>
      <StyledPaymentCardPrice>{price}</StyledPaymentCardPrice>
      <StyledPaymentCardPossibilities>{children}</StyledPaymentCardPossibilities>
    </StyledPaymentCard>
  );
};

export default memo(PaymentCard);
