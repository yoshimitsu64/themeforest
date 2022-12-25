import { memo } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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
    <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_KEY! }}>
      <StyledPaymentCard>
        <StyledPaymentCardTitle>{subscribe}</StyledPaymentCardTitle>
        <StyledPaymentCardPrice>{price}</StyledPaymentCardPrice>
        <StyledPaymentCardPossibilities>{children}</StyledPaymentCardPossibilities>
        <PayPalButtons />
      </StyledPaymentCard>
    </PayPalScriptProvider>
  );
};

export default memo(PaymentCard);
