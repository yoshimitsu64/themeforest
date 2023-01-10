import { IBlogCards } from 'appTypes/index';
import Typography from 'components/typography';
import { useCountOfCards } from 'hooks/useCountCards';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePagination } from 'hooks/usePagination';

import { ArrowLeft48Filled, ArrowRight48Filled } from '@fluentui/react-icons';

import { blogCards } from 'constants/cardsPayload/blogCards';

import BlogCard from 'components/cards/blogCard';

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

  const [handleNextClick, handlePreviousClick, isAvailableNextPage, isAvailablePrevPage, cards] =
    usePagination<IBlogCards>(blogCards, countOfCards);

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
          {cards.map(({ date, name, text, imageURL }, index) => (
            <BlogCard imageURL={imageURL} date={date} name={name} text={text} key={index} />
          ))}
        </StyledBlogCardsContainer>
      </StyledContainer>
    </Section>
  );
}

export default BlogSection;
