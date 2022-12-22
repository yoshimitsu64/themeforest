import { ArrowRightFilled, ArrowLeftFilled } from '@fluentui/react-icons';

import { person } from 'constants/testCard';

import ReviewCard from 'components/ui/reviewCard';

import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionHeader,
  StyledTestimonialsSectionTitle,
  StyledArrowsContainer,
  StyledArrow,
  StyledReviewCardsContainer,
} from './styled';

const TestimonialsSection = (): JSX.Element => {
  return (
    <StyledTestimonialsSection className={'asdasd'}>
      <StyledTestimonialsSectionHeader>
        <StyledTestimonialsSectionTitle>
          Testimonials
        </StyledTestimonialsSectionTitle>
        <StyledArrowsContainer>
          <StyledArrow>
            <ArrowRightFilled />
          </StyledArrow>
          <StyledArrow>
            <ArrowLeftFilled />
          </StyledArrow>
        </StyledArrowsContainer>
      </StyledTestimonialsSectionHeader>
      <StyledReviewCardsContainer>
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
      </StyledReviewCardsContainer>
    </StyledTestimonialsSection>
  );
};

export default TestimonialsSection;
