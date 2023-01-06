import styled from 'styled-components';

export const StyledTestimonialsSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1110px;
  height: ${({ theme }) => theme.sizes[1]}%;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;

  & .review-card:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[3]}px;
  }
`;

export const StyledTestimonialsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;
export const StyledArrowsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.space[4]}px;
  }
`;

export const StyledReviewCardsContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.sizes[1]}vw;
  overflow: hidden;
`;
