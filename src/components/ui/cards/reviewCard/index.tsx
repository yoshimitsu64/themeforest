import { memo } from 'react';

import { IProps } from './types';
import {
  StyledReviewCard,
  StyledPersonInfoContainer,
  StyledReviewCardHeader,
  StyledPersonLogo,
  StyledPersonName,
  StyledPersonPosition,
  StyledReview,
} from './styled';

function ReviewCard({ imageURL, review, position, name }: IProps): JSX.Element {
  return (
    <StyledReviewCard className="review-card">
      <StyledReviewCardHeader>
        <StyledPersonLogo imageURL={imageURL} />
        <StyledPersonInfoContainer>
          <StyledPersonName>{name}</StyledPersonName>
          <StyledPersonPosition>{position}</StyledPersonPosition>
        </StyledPersonInfoContainer>
      </StyledReviewCardHeader>
      <StyledReview>{review}</StyledReview>
    </StyledReviewCard>
  );
}

export default memo(ReviewCard);
