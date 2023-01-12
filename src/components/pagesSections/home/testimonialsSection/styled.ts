import styled from 'styled-components';

export const StyledTestimonialsSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  height: ${({ theme }) => theme.sizes[1]}%;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  column-gap: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const StyledTestimonialsSectionMobile = styled(StyledTestimonialsSection)`
  margin-top: ${({ theme }) => theme.space[9]}px;
  padding: ${({ theme }) => theme.space[2]}px;
`;

export const StyledTestimonialsSectionHeader = styled.div`
  width: ${({ theme }) => theme.sizes[1]}%;
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
  max-width: ${({ theme }) => theme.sizes[1]}%;
  overflow: hidden;
  column-gap: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[0]}px;
`;
