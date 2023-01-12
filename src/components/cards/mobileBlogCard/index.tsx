import { useNavigate } from 'react-router-dom';

import { IBlog } from 'appTypes/index';
import Tag from 'components/tag';
import Typography from 'components/typography';

import { StyledMobileBlogCard, StyledTagsContainer, StyledImage } from './styled';

const MobileBlogCard = ({ imageURL, id, title, tags, date }: Partial<IBlog>): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blogs/${id}`);
  };

  return (
    <StyledMobileBlogCard onClick={handleClick}>
      <StyledImage src={imageURL} />
      <Typography type="paragraph" variant="regular" size={2} color="grey" ml={10} mr={10}>
        {date}
      </Typography>
      <Typography type="headLine" variant="bold" size={2} ml={10} mr={10}>
        {title}
      </Typography>
      <StyledTagsContainer>
        {tags!.map((text) => (
          <Tag text={text} key={text} />
        ))}
      </StyledTagsContainer>
    </StyledMobileBlogCard>
  );
};

export default MobileBlogCard;
