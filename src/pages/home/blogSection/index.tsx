import { ArrowLeftFilled, ArrowRightFilled } from '@fluentui/react-icons';

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
        <BlogCard
          date={'22 June 2022'}
          name={'ISO 13485 compliance of medical devices'}
          text={person.review}
        />
        <BlogCard
          date={'22 June 2022'}
          name={'ISO 13485 compliance of medical devices'}
          text={person.review}
        />
        <BlogCard
          date={'22 June 2022'}
          name={'ISO 13485 compliance of medical devices'}
          text={person.review}
        />
      </StyledBlogCardsContainer>
    </StyledBlogSection>
  );
};

export default BlogSection;
