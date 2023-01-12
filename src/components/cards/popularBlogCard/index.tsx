import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from 'components/typography';

import { PopularBlogProps } from 'appTypes/index';

import { StyledBlog, StyledImage, StyledBlogDescription } from './styled';

const PopularBlogCard = ({ imageURL, date, title, id }: PopularBlogProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blogs/${id}`);
  };

  return (
    <StyledBlog onClick={handleClick}>
      <StyledImage src={imageURL} />
      <StyledBlogDescription>
        <Typography type="paragraph" variant="regular" size={2} color="grey">
          {date}
        </Typography>
        <Typography type="headLine" variant="bold" size={2}>
          {title}
        </Typography>
        <Typography type="headLine" variant="semiBold" size={0} color="primary">
          Read more
        </Typography>
      </StyledBlogDescription>
    </StyledBlog>
  );
};

export default memo(PopularBlogCard);
