import styled from 'styled-components';
import {
  StyledPossibilities,
  StyledPrice,
  StyledPricingCardTitle,
} from 'components/ui/cards/pricingCard/styled';

export const StyledPaymentCard = styled.div`
  width: ${({ theme }) => theme.sizes[9]}px;
  padding-left: ${({ theme }) => theme.padding[3]}px;
  padding-right: ${({ theme }) => theme.padding[3]}px;
  padding-right: ${({ theme }) => theme.padding[3]}px;
  padding-top: ${({ theme }) => theme.padding[6]}px;
  padding-bottom: ${({ theme }) => theme.padding[7]}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const StyledPaymentCardTitle = StyledPricingCardTitle.withComponent('div');

export const StyledPaymentCardPrice = StyledPrice.withComponent('div');

export const StyledPaymentCardPossibilities = styled(StyledPossibilities)`
  margin-top: 0;
`;
