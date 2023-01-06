import { ITestimonialsCards } from 'appTypes/index';
import Typography from 'components/business/typography';
import { useCountOfCards } from 'hooks/useCountCards';
import { usePagination } from 'hooks/usePagination';

import { ArrowLeft48Filled, ArrowRight48Filled } from '@fluentui/react-icons';

import ReviewCard from 'components/ui/cards/reviewCard';

import { testimonialCards } from 'constants/cardsPayload/testimonialCards';

import { StyledArrow } from 'pages/home/blogSection/styled';

import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionHeader,
  StyledArrowsContainer,
  StyledReviewCardsContainer,
} from './styled';

function TestimonialsSection(): JSX.Element {
  const countOfCards = useCountOfCards();

  const [handleNextClick, handlePreviousClick, isAvailableNextPage, isAvailablePrevPage, cards] =
    usePagination<ITestimonialsCards>(testimonialCards, countOfCards);

  return (
    <StyledTestimonialsSection>
      <StyledTestimonialsSectionHeader>
        <Typography type="headLine" variant="extraBold" size={1}>
          Testimonials
        </Typography>
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
        {cards.map(({ imageURL, name, position, review }, index) => (
          <ReviewCard
            imageURL={imageURL}
            name={name}
            position={position}
            review={review}
            key={index}
          />
        ))}
      </StyledReviewCardsContainer>
    </StyledTestimonialsSection>
  );
}

export default TestimonialsSection;
