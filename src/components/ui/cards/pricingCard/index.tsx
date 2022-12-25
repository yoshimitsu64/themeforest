import { ChangeEvent, useMemo, useRef, useState } from 'react';

import { ForwardRef } from 'appTypes/index';

import PricingButton from 'components/ui/buttons/pricingButton';
import RectangleButtonFilled from 'components/ui/buttons/rectangleButtonFilled';
import Modal from 'components/modal';
import PaymentCard from 'components/ui/cards/paymentCard';

import {
  StyledPricingCard,
  StyledPriceContainer,
  StyledPricingCardTitle,
  StyledPrice,
  StyledButtonsContainer,
  StyledPriceButtonsContainer,
  StyledPossibilities,
} from './styled';

interface IProps {
  title: string;
  price: string;
  children: JSX.Element[] | JSX.Element;
}

const PricingCard = ({ title, price, children }: IProps): JSX.Element => {
  const ref = useRef<ForwardRef>(null);

  const [subscribeVariant, setSubscribeVariant] = useState<string>('Mo');

  const child = useMemo(() => children, []);

  const handleClose = (): void => {
    ref.current?.closeModal(true);
  };

  const handleSubscribeClick = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscribeVariant(e.target.innerHTML);
  };

  return (
    <StyledPricingCard className={'pricingCard'}>
      <StyledPriceContainer>
        <StyledPricingCardTitle>{title}</StyledPricingCardTitle>
        <StyledPriceButtonsContainer>
          <StyledPrice>{price}</StyledPrice>
          <StyledButtonsContainer className={'buttons'}>
            <PricingButton text={'Mo'} onClick={handleSubscribeClick} />
            <PricingButton text={'Yr'} onClick={handleSubscribeClick} />
          </StyledButtonsContainer>
        </StyledPriceButtonsContainer>
      </StyledPriceContainer>
      <RectangleButtonFilled width={'100%'} text={'Chose plan'} onClick={handleClose} />
      <StyledPossibilities className="possibilities">{children}</StyledPossibilities>
      <Modal ref={ref}>
        <PaymentCard price={price} subscribeVariant={subscribeVariant}>
          <StyledPossibilities>{child}</StyledPossibilities>
        </PaymentCard>
      </Modal>
    </StyledPricingCard>
  );
};

export default PricingCard;
