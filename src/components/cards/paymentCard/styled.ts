import styled from 'styled-components';

import { StyledPossibilities } from 'components/cards/pricingCard/styled';

export const StyledPaymentCard = styled.div`
  width: ${({ theme }) => theme.sizes[7]}px;
  max-height: ${({ theme }) => theme.sizes[11]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[7]}px;
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
    width: ${({ theme }) => theme.space[0]}px;
    background-color: ${({ theme }) => theme.colors.helperBlue3};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.space[1]}px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledPaymentCardPossibilities = styled(StyledPossibilities)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StledPossitbilityContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
