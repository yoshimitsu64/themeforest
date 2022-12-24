import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: ${({ theme }) => theme.sizes[4]}px;
  padding: ${({ theme }) => theme.padding[4]}px;
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

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.padding[1]}px;
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[2].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[2].lineHeight}px;
`;
