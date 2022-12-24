import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ theme }) => theme.sizes[5]}px;

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: ${({ theme }) => theme.sizes[1] * 100}px;
    transform: translate(-27%);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.sizes[1] + 20}px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.padding[4]}px;
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.padding[4]}px;
`;

export const StyledSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[0].lineHeight}px;
`;
