import styled from 'styled-components';

export const StyledFooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1110px;

  &::before {
    margin-bottom: 30px;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.helperBlue2};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledText = styled.div`
  width: max-content;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[2].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[2].lineHeight}px;
`;

export const StyledPrivacyPolicy = styled.div`
  display: flex;

  & div:not(:last-child) {
    margin-right: ${({ theme }) => theme.sizes[1]}px;
  }
`;
