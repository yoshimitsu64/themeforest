import { ArrowLeftFilled, ArrowRightFilled } from '@fluentui/react-icons';

import Image from 'assets/images/img_8.png';
import { person } from 'constants/testCard';
import BlogCard from 'components/ui/cards/blogCard';

import {
  StyledBlogSection,
  StyledBlogsSectionHeader,
  StyledBlogSectionTitle,
  StyledBlogCardsContainer,
  StyledArrow,
  StyledArrowsContainer,
} from './styled';

const BlogSection = (): JSX.Element => {
  return (
    <StyledBlogSection>
      <StyledBlogsSectionHeader>
        <StyledBlogSectionTitle>Our blog</StyledBlogSectionTitle>
        <StyledArrowsContainer>
          <StyledArrow>
            <ArrowRightFilled />
          </StyledArrow>
          <StyledArrow>
            <ArrowLeftFilled />
          </StyledArrow>
        </StyledArrowsContainer>
      </StyledBlogsSectionHeader>
      <StyledBlogCardsContainer>
        {new Array(3)
          .fill({
            date: '22 June 2022',
            name: 'ISO 13485 compliance of medical devices',
            text: person.review,
            imageURL: Image,
          })
          .map(({ date, name, text, imageURL }, index) => (
            <BlogCard
              imageURL={imageURL}
              date={date}
              name={name}
              text={text}
              key={index}
            />
          ))}
      </StyledBlogCardsContainer>
    </StyledBlogSection>
  );
};

export default BlogSection;
