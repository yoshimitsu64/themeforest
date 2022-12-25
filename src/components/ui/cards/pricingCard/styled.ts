import styled from 'styled-components';

export const StyledPricingCard = styled.div`
  min-width: ${({ theme }) => theme.sizes[4]}px;
  padding-left: ${({ theme }) => theme.padding[3]}px;
  padding-right: ${({ theme }) => theme.padding[3]}px;
  padding-right: ${({ theme }) => theme.padding[3]}px;
  padding-top: ${({ theme }) => theme.padding[6]}px;
  padding-bottom: ${({ theme }) => theme.padding[7]}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover .possibilities svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover .possibilities span {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover button {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover .buttons button:last-child {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.padding[6]}px;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledPricingCardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight}px;
  margin-bottom: ${({ theme }) => theme.padding[3]}px;
`;

export const StyledPriceButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[0].fontWeight}px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.padding[1]}px;
  }
`;

export const StyledPossibilities = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.padding[5]}px;

  & div:not(div:last-child) {
    margin-bottom: ${({ theme }) => theme.padding[2]}px;
  }
`;
