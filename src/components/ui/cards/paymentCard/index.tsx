import { memo } from 'react';

import { Checkmark16Filled } from '@fluentui/react-icons';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import Typography from 'components/business/typography';

import { IProps } from './types';
import {
  StyledPaymentCard,
  StyledPaymentCardPossibilities,
  StledPossitbilityContainer,
} from './styled';

function PaymentCard({ price, subscribeVariant, possibilities }: IProps): JSX.Element {
  const subscribe = subscribeVariant === 'Mo' ? 'Month subscribe' : 'Year subscribe';

  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_KEY! }}>
      <StyledPaymentCard>
        <StyledPaymentCardPossibilities>
          <Typography type="headLine" variant="bold" size={2}>
            {subscribe}
          </Typography>
          <Typography type="headLine" variant="bold" size={0}>
            Price: {price}
          </Typography>
          {possibilities.map((item) => (
            <StledPossitbilityContainer color="black">
              <Checkmark16Filled />
              <Typography type="paragraph" variant="regular" size={2} color="black">
                &nbsp; {item}
              </Typography>
            </StledPossitbilityContainer>
          ))}
        </StyledPaymentCardPossibilities>
        <PayPalButtons />
      </StyledPaymentCard>
    </PayPalScriptProvider>
  );
}

export default memo(PaymentCard);
