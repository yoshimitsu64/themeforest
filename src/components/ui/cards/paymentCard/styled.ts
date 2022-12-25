import styled from 'styled-components';
import {
  StyledPossibilities,
  StyledPrice,
  StyledPricingCardTitle,
} from 'components/ui/cards/pricingCard/styled';

export const StyledPaymentCard = styled.div`
  width: ${({ theme }) => theme.sizes[9]}px;
  max-height: ${({ theme }) => theme.sizes[10]}px;
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
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.padding[1]}px;
    background-color: ${({ theme }) => theme.colors.helperBlue3};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.padding[1]}px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledPaymentCardTitle = StyledPricingCardTitle.withComponent('div');

export const StyledPaymentCardPrice = StyledPrice.withComponent('div');

export const StyledPaymentCardPossibilities = styled(StyledPossibilities)`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.padding[3]}px;
`;
