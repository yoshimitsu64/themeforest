import { ArrowLeft48Filled, ArrowRight48Filled } from '@fluentui/react-icons';

import { IBlog } from 'appTypes/index';

import { useCountOfCards, useMediaQuery, usePagination } from 'hooks/index';

import Typography from 'components/typography';
import BlogCard from 'components/cards/blogCard';

import { blogInfo } from 'mocks/index';

import {
  StyledBlogSection,
  StyledBlogsSectionHeader,
  StyledArrow,
  StyledArrowsContainer,
  StyledContainer,
  StyledBlogCardsContainer,
  StyledBlogSectionMobile,
} from './styled';

function BlogSection(): JSX.Element {
  const { isMobile, isTablet } = useMediaQuery();

  const countOfCards = useCountOfCards();

  const {
    handleNextClick,
    handlePreviousClick,
    isAvailableNextPage,
    isAvailablePrevPage,
    currentCards,
  } = usePagination<IBlog>(blogInfo, countOfCards);

  const Section = isMobile || isTablet ? StyledBlogSectionMobile : StyledBlogSection;

  return (
    <Section>
      <StyledContainer>
        <StyledBlogsSectionHeader>
          <Typography type="headLine" variant="extraBold" size={1}>
            Our blog
          </Typography>
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
          {currentCards.map(({ date, title, partOfText, imageURL, id }) => (
            <BlogCard
              imageURL={imageURL}
              date={date}
              title={title}
              partOfText={partOfText}
              key={id}
              id={id}
            />
          ))}
        </StyledBlogCardsContainer>
      </StyledContainer>
    </Section>
  );
}

export default BlogSection;
