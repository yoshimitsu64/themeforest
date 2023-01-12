import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from 'components/typography';

import { ArrowRightFilled } from '@fluentui/react-icons';

import { Props } from './types';
import { StyledBlogCard, StyledBlogImage, StyledReadMoreContainer } from './styled';

function BlogCard({ imageURL, date, title, partOfText, id }: Props): JSX.Element {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <StyledBlogCard className="blogCard" onClick={handleClick}>
      <StyledBlogImage src={imageURL} />
      <Typography type="paragraph" variant="regular" size={2} color="grey" mb={10}>
        {date}
      </Typography>
      <Typography type="headLine" variant="bold" size={0} mb={10}>
        {title}
      </Typography>
      <Typography type="paragraph" variant="regular" size={1}>
        {partOfText}
      </Typography>
      <Typography type="paragraph" variant="semiBold" size={0} color="primary">
        <StyledReadMoreContainer>
          Read more &nbsp; <ArrowRightFilled />
        </StyledReadMoreContainer>
      </Typography>
    </StyledBlogCard>
  );
}

export default memo(BlogCard);
