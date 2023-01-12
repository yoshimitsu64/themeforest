import { ArrowLeft32Filled, ArrowRight32Filled } from '@fluentui/react-icons';

import { ITestimonialsCards } from 'appTypes/index';

import { useCountOfCards, useMediaQuery, usePagination } from 'hooks/index';

import { testimonialCardsMocks } from 'mocks/index';

import { StyledArrow } from 'components/pagesSections/home/blogSection/styled';

import ReviewCard from 'components/cards/reviewCard';
import Typography from 'components/typography';

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

  const {
    handleNextClick,
    handlePreviousClick,
    isAvailableNextPage,
    isAvailablePrevPage,
    currentCards,
  } = usePagination<ITestimonialsCards>(testimonialCardsMocks, countOfCards);

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
        {currentCards.map(({ imageURL, name, position, review }, index) => (
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
