import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: ${({ theme }) => theme.sizes[4]}px;
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.shadows.shadowCard3.background};
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  border-radius: ${({ theme }) => theme.shadows.shadowCard3.borderRadius};
`;

export const StyledImage = styled.div`
  &:first-child {
    font-size: ${({ theme }) => theme.fonts[8]}px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
