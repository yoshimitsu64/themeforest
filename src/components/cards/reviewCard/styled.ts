import styled from 'styled-components';

interface IProps {
  imageURL: string;
}

export const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[6]}px;
  width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[6]}px;
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  scroll-margin: inherit;
`;

export const StyledReviewCardMobile = styled(StyledReviewCard)`
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledReviewCardHeader = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[1] - 20}px;
  align-items: center;
`;

export const StyledPersonLogo = styled.div<IProps>`
  height: inherit;
  width: ${({ theme }) => theme.sizes[1] - 20}px;
  border-radius: ${({ theme }) => theme.sizes[1]}%;

  content: url(${({ imageURL }) => imageURL});
`;

export const StyledPersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.space[4]}px;
`;

export const StyledPersonName = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight};
`;

export const StyledPersonPosition = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.medium[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.medium[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.headLine.medium[0].lineHeight}px;
`;

export const StyledReview = styled.div`
  margin-top: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
`;
