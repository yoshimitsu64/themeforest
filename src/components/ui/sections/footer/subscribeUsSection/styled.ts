import styled from 'styled-components';

export const StyledContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[9]}px;
  padding-bottom: ${({ theme }) => theme.space[9]}px;

  max-height: ${({ theme }) => theme.sizes[5]}px;
  max-width: 1110px;
  justify-content: space-between;

  ${({ isMobile }) => {
    if (isMobile) {
      return {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        alignItems: 'center',
      };
    }
  }};

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
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: 20px;
`;

export const StyledSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
`;
