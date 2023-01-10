import Typography from 'components/typography';
import { memo } from 'react';

import { ArrowRightFilled } from '@fluentui/react-icons';

import { IProps } from './types';
import { StyledBlogCard, StyledBlogImage, StyledReadMoreContainer } from './styled';

function BlogCard({ imageURL, date, name, text }: IProps): JSX.Element {
  return (
    <StyledBlogCard className="blogCard">
      <StyledBlogImage src={imageURL} />
      <Typography type="paragraph" variant="regular" size={2} color="grey" mb={10}>
        {date}
      </Typography>
      <Typography type="headLine" variant="bold" size={0} mb={10}>
        {name}
      </Typography>
      <Typography type="paragraph" variant="regular" size={1}>
        {text}
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
