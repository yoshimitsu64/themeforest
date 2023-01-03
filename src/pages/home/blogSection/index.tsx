import { useState } from 'react';

import { ArrowLeft48Filled, ArrowRight48Filled } from '@fluentui/react-icons';

import { blogCards } from 'constants/cardsPayload/blogCards';

import { usePaginationValidation } from 'hooks';

import BlogCard from 'components/ui/cards/blogCard';
import Paginate from 'components/business/paginate';

import {
  StyledBlogSection,
  StyledBlogsSectionHeader,
  StyledBlogSectionTitle,
  StyledArrow,
  StyledArrowsContainer,
  StyledContainer,
  StyledBlogCardsContainer,
} from './styled';

function BlogSection(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAvailableNextPage, isAvailablePrevPage] = usePaginationValidation(
    currentPage,
    blogCards,
    3
  );

  const handleNextClick = () => {
    isAvailableNextPage && setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    isAvailablePrevPage && setCurrentPage(currentPage - 1);
  };

  return (
    <StyledBlogSection>
      <StyledContainer>
        <StyledBlogsSectionHeader>
          <StyledBlogSectionTitle>Our blog</StyledBlogSectionTitle>
          <StyledArrowsContainer>
            <StyledArrow onClick={handleNextClick}>
              <ArrowRight48Filled style={{ color: isAvailableNextPage ? 'black' : 'grey' }} />
            </StyledArrow>
            <StyledArrow onClick={handlePreviousClick}>
              <ArrowLeft48Filled style={{ color: isAvailablePrevPage ? 'black' : 'grey' }} />
            </StyledArrow>
          </StyledArrowsContainer>
        </StyledBlogsSectionHeader>
        <StyledBlogCardsContainer>
          <Paginate currentPage={currentPage} itemCount={3}>
            {blogCards.map(({ date, name, text, imageURL }, index) => (
              <BlogCard imageURL={imageURL} date={date} name={name} text={text} key={index} />
            ))}
          </Paginate>
        </StyledBlogCardsContainer>
      </StyledContainer>
    </StyledBlogSection>
  );
}

export default BlogSection;
