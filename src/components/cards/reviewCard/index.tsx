import Typography from 'components/typography';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { memo } from 'react';

import { IProps } from './types';
import {
  StyledReviewCard,
  StyledPersonInfoContainer,
  StyledReviewCardHeader,
  StyledPersonLogo,
  StyledReview,
  StyledReviewCardMobile,
} from './styled';

function ReviewCard({ imageURL, review, position, name }: IProps): JSX.Element {
  const { isMobile } = useMediaQuery();

  const Card = isMobile ? StyledReviewCardMobile : StyledReviewCard;

  return (
    <Card className="review-card">
      <StyledReviewCardHeader>
        <StyledPersonLogo imageURL={imageURL} />
        <StyledPersonInfoContainer>
          <Typography type="headLine" variant="bold" size={2}>
            {name}
          </Typography>
          <Typography type="headLine" variant="medium" size={0}>
            {position}
          </Typography>
        </StyledPersonInfoContainer>
      </StyledReviewCardHeader>
      <StyledReview>{review}</StyledReview>
    </Card>
  );
}

export default memo(ReviewCard);
