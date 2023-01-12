import { IBlog } from 'appTypes/index';
import Typography from 'components/typography';
import { useEffect, useState } from 'react';

import MobileBlogCard from 'components/cards/mobileBlogCard';
import { useMediaQuery, usePagination } from 'hooks/index';

import PopularBlogCard from 'components/cards/popularBlogCard';
import SearchBar from 'components/fields/searchBar';

import { blogInfo } from 'mocks/index';

import { StyledBlogsSection, StyledContainer, StyledButton } from './styled';

const BlogsSection = (): JSX.Element => {
  const { isMobile } = useMediaQuery();

  const { handleNextClick, isAvailableNextPage, currentCards } = usePagination(blogInfo, 9);

  const [cards, setCards] = useState<IBlog[]>([]);

  const handleClick = () => {
    handleNextClick();
  };

  useEffect(() => {
    setCards([...cards, ...currentCards]);
  }, [isAvailableNextPage]);

  return (
    <StyledBlogsSection>
      <StyledContainer>
        {!isMobile && <SearchBar text="Search" />}
        {isMobile
          ? cards.map(({ imageURL, date, title, id, tags }) => (
              <MobileBlogCard
                id={id}
                imageURL={imageURL}
                title={title}
                date={date}
                tags={tags}
                key={id}
              />
            ))
          : cards.map(({ imageURL, date, title, id }) => (
              <PopularBlogCard id={id} imageURL={imageURL} title={title} date={date} key={id} />
            ))}
        {isAvailableNextPage && (
          <StyledButton onClick={handleClick}>
            <Typography type="paragraph" variant="bold" size={0} color="white">
              See more
            </Typography>
          </StyledButton>
        )}
      </StyledContainer>
    </StyledBlogsSection>
  );
};

export default BlogsSection;
