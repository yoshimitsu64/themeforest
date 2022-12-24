import PricingButton from 'components/ui/buttons/pricingButton';
import RectangleButtonFilled from 'components/ui/buttons/rectangleButtonFilled';

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
  return (
    <StyledPricingCard className={'pricingCard'}>
      <StyledPriceContainer>
        <StyledPricingCardTitle>{title}</StyledPricingCardTitle>
        <StyledPriceButtonsContainer>
          <StyledPrice>{price}</StyledPrice>
          <StyledButtonsContainer>
            <PricingButton text={'Mo'} />
            <PricingButton text={'Yr'} />
          </StyledButtonsContainer>
        </StyledPriceButtonsContainer>
      </StyledPriceContainer>
      <RectangleButtonFilled width={'100%'} text={'Chose plan'} />
      <StyledPossibilities>{children}</StyledPossibilities>
    </StyledPricingCard>
  );
};

export default PricingCard;
