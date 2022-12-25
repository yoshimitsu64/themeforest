import {
  StyledReviewCard,
  StyledPersonInfoContainer,
  StyledReviewCardHeader,
  StyledPersonLogo,
  StyledPersonName,
  StyledPersonPosition,
  StyledReview,
} from './styled';

interface IProps {
  imageURL: string;
  name: string;
  position: string;
  review: string;
}

const ReviewCard = ({
  imageURL,
  review,
  position,
  name,
}: IProps): JSX.Element => {
  return (
    <StyledReviewCard>
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
};

export default ReviewCard;