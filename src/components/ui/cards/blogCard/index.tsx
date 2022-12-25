import { ArrowRightFilled } from '@fluentui/react-icons';

import {
  StyledBlogCard,
  StyledBlogImage,
  StyledBlogDate,
  StyledBlogName,
  StyledBlogText,
  StyledReadMoreContainer,
  StyledReadMore,
} from './styled';

interface IProps {
  imageURL: string;
  date: string;
  name: string;
  text: string;
}

const BlogCard = ({ imageURL, date, name, text }: IProps): JSX.Element => {
  return (
    <StyledBlogCard className={'blogCard'}>
      <StyledBlogImage imageURL={imageURL} />
      <StyledBlogDate>{date}</StyledBlogDate>
      <StyledBlogName>{name}</StyledBlogName>
      <StyledBlogText>{text}</StyledBlogText>
      <StyledReadMoreContainer>
        <StyledReadMore>Read more</StyledReadMore>
        <ArrowRightFilled />
      </StyledReadMoreContainer>
    </StyledBlogCard>
  );
};

export default BlogCard;
