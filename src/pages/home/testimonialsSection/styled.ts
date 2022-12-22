import styled from 'styled-components';

export const StyledTestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
`;

export const StyledTestimonialsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledTestimonialsSectionTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledArrowsContainer = styled.div`
  display: flex;

  & button:first-child {
    margin-right: ${({ theme }) => theme.padding[4]}px;
  }
`;

export const StyledArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borders.borderRadius[3]}px;
  border: none;
`;

export const StyledReviewCardsContainer = styled.div`
  display: flex;

  & div:not(div:last-child) {
    margin-right: ${({ theme }) => theme.padding[5]}px;
  }
`;
