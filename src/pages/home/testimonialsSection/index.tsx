import { ITestimonialsCards } from 'appTypes/index';
import Typography from 'components/typography';
import { useCountOfCards } from 'hooks/useCountCards';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePagination } from 'hooks/usePagination';

import { ArrowLeft32Filled, ArrowRight32Filled } from '@fluentui/react-icons';

import ReviewCard from 'components/cards/reviewCard';

import { testimonialCards } from 'constants/cardsPayload/testimonialCards';

import { StyledArrow } from 'pages/home/blogSection/styled';

import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionHeader,
  StyledArrowsContainer,
  StyledReviewCardsContainer,
  StyledTestimonialsSectionMobile,
} from './styled';

function TestimonialsSection(): JSX.Element {
  const { isMobile } = useMediaQuery();

  const countOfCards = useCountOfCards();

  const [handleNextClick, handlePreviousClick, isAvailableNextPage, isAvailablePrevPage, cards] =
    usePagination<ITestimonialsCards>(testimonialCards, countOfCards);

  const Section = isMobile ? StyledTestimonialsSectionMobile : StyledTestimonialsSection;

  return (
    <Section>
      <StyledTestimonialsSectionHeader>
        {!isMobile ? (
          <Typography type="headLine" variant="extraBold" size={1}>
            Testimonials
          </Typography>
        ) : (
          <Typography type="headLine" variant="extraBold" size={2}>
            Testimonials
          </Typography>
        )}
        <StyledArrowsContainer>
          <StyledArrow onClick={handleNextClick}>
            <ArrowRight32Filled style={{ color: isAvailableNextPage ? 'black' : 'grey' }} />
          </StyledArrow>
          <StyledArrow onClick={handlePreviousClick}>
            <ArrowLeft32Filled style={{ color: isAvailablePrevPage ? 'black' : 'grey' }} />
          </StyledArrow>
        </StyledArrowsContainer>
      </StyledTestimonialsSectionHeader>
      <StyledReviewCardsContainer>
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
    </Section>
  );
}

export default TestimonialsSection;
