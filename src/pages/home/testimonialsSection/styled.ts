import styled from 'styled-components';

export const StyledTestimonialsSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  padding-left: 405px;
  padding-right: 405px;
`;

export const StyledTestimonialsSectionTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledTestimonialsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;
export const StyledArrowsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.padding[4]}px;
  }
`;

export const StyledReviewCardsContainer = styled.div`
  display: flex;
  max-width: 1110px;
  overflow: hidden;
`;
