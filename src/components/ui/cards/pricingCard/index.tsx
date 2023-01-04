import React, { useRef, useState, memo } from 'react';
import Typography from 'components/business/typography';
import { Checkmark16Filled } from '@fluentui/react-icons';

import { ForwardRef } from 'appTypes/index';

import PricingButton from 'components/ui/buttons/pricingButton';
import RectangleButtonFilled from 'components/ui/buttons/rectangleButtonFilled';
import Modal from 'components/business/modal';
import PaymentCard from 'components/ui/cards/paymentCard';

import { IProps } from './types';
import {
  StyledPricingCard,
  StyledPriceContainer,
  StyledPricingCardTitle,
  StyledButtonsContainer,
  StyledPriceButtonsContainer,
  StyledPossibilities,
  StledPossitbilityContainer,
} from './styled';

function PricingCard({ title, price, possibilities }: IProps): JSX.Element {
  const ref = useRef<ForwardRef>(null);

  const [subscribeVariant, setSubscribeVariant] = useState<string>('Mo');

  const handleClose = (): void => {
    ref.current?.closeModal(true);
  };

  const handleSubscribeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSubscribeVariant((e.target as HTMLElement).innerHTML);
  };

  return (
    <StyledPricingCard className="pricingCard">
      <StyledPriceContainer>
        <StyledPricingCardTitle>{title}</StyledPricingCardTitle>
        <StyledPriceButtonsContainer>
          <Typography type="headLine" variant="bold" size={0}>
            {price}
          </Typography>
          <StyledButtonsContainer>
            <PricingButton text="Mo" onClick={handleSubscribeClick} />
            <PricingButton text="Yr" onClick={handleSubscribeClick} />
          </StyledButtonsContainer>
        </StyledPriceButtonsContainer>
      </StyledPriceContainer>
      <RectangleButtonFilled width="100%" text="Chose plan" onClick={handleClose} />
      <StyledPossibilities>
        {possibilities.map((item) => (
          <StledPossitbilityContainer color="black">
            <Checkmark16Filled />
            <Typography type="paragraph" variant="regular" size={2} color="black">
              &nbsp; {item}
            </Typography>
          </StledPossitbilityContainer>
        ))}
      </StyledPossibilities>
      {!ref.current?.isOpened && (
        <Modal ref={ref}>
          <PaymentCard
            price={price}
            subscribeVariant={subscribeVariant}
            possibilities={possibilities}
          />
        </Modal>
      )}
    </StyledPricingCard>
  );
}

export default memo(PricingCard);
