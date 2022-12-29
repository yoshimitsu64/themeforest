import { useRef } from 'react';

import { person } from 'constants/testCard';

import { moveCarouselItems } from 'helpers';

import ReviewCard from 'components/ui/cards/reviewCard';
import CarouselButton from 'components/ui/buttons/carouselButton';

import Carousel from 'components/business/carousel';

import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionHeader,
  StyledTestimonialsSectionTitle,
  StyledArrowsContainer,
  StyledReviewCardsContainer,
} from './styled';

function TestimonialsSection(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <StyledTestimonialsSection>
      <StyledTestimonialsSectionHeader>
        <StyledTestimonialsSectionTitle>Testimonials</StyledTestimonialsSectionTitle>
        <StyledArrowsContainer>
          <CarouselButton variant="next" onClick={moveCarouselItems(ref, 'next')} />
          <CarouselButton variant="previous" onClick={moveCarouselItems(ref, 'previous')} />
        </StyledArrowsContainer>
      </StyledTestimonialsSectionHeader>
      <StyledReviewCardsContainer className="testimonials">
        <Carousel ref={ref}>
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
          <ReviewCard
            imageURL={person.imageURL}
            name={person.name}
            position={person.position}
            review={person.review}
          />
        </Carousel>
      </StyledReviewCardsContainer>
    </StyledTestimonialsSection>
  );
}

export default TestimonialsSection;
