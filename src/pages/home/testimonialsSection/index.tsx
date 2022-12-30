import { useState } from 'react';

import { ArrowLeft48Filled, ArrowRight48Filled } from '@fluentui/react-icons';

import ReviewCard from 'components/ui/cards/reviewCard';
import Paginate from 'components/business/paginate';

import { testimonialCards } from 'constants/cardsPayload/testimonialCards';
import { blogCards } from 'constants/cardsPayload/blogCards';

import { usePaginationValidation } from 'hooks/usePaginationValidation';

import { StyledArrow } from 'pages/home/blogSection/styled';

import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionHeader,
  StyledTestimonialsSectionTitle,
  StyledArrowsContainer,
  StyledReviewCardsContainer,
} from './styled';

function TestimonialsSection(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAvailableNextPage, isAvailablePrevPage] = usePaginationValidation(
    currentPage,
    blogCards
  );

  const handleNextClick = () => {
    isAvailableNextPage && setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    isAvailablePrevPage && setCurrentPage(currentPage - 1);
  };

  return (
    <StyledTestimonialsSection>
      <StyledTestimonialsSectionHeader>
        <StyledTestimonialsSectionTitle>Testimonials</StyledTestimonialsSectionTitle>
        <StyledArrowsContainer>
          <StyledArrow onClick={handleNextClick}>
            <ArrowRight48Filled style={{ color: isAvailableNextPage ? 'black' : 'grey' }} />
          </StyledArrow>
          <StyledArrow onClick={handlePreviousClick}>
            <ArrowLeft48Filled style={{ color: isAvailablePrevPage ? 'black' : 'grey' }} />
          </StyledArrow>
        </StyledArrowsContainer>
      </StyledTestimonialsSectionHeader>
      <StyledReviewCardsContainer className="testimonials">
        <Paginate currentPage={currentPage} itemCount={3}>
          {testimonialCards.map(({ imageURL, name, position, review }, index) => (
            <ReviewCard
              imageURL={imageURL}
              name={name}
              position={position}
              review={review}
              key={index}
            />
          ))}
        </Paginate>
      </StyledReviewCardsContainer>
    </StyledTestimonialsSection>
  );
}

export default TestimonialsSection;
