import styled from 'styled-components';

export const StyledSolutionCard = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.space[4]}px;
  padding-left: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[6]}px;
  background-color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.shadows.shadowCard3.background};
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  border-radius: ${({ theme }) => theme.shadows.shadowCard3.borderRadius};
`;

export const StyledCardImage = styled.div`
  &:first-child {
    font-size: ${({ theme }) => theme.fonts[10]}px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
