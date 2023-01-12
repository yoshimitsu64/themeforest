import PopularBlogCard from 'components/cards/popularBlogCard';
import Typography from 'components/typography';
import SearchBar from 'components/fields/searchBar';

import { getPopularPosts } from 'helpers/getPopularPosts';

import { blogInfo } from 'mocks/index';

import { StyledSideBar, StyledPopularBlogs } from './styled';

const SidebarSection = (): JSX.Element => {
  return (
    <StyledSideBar>
      <SearchBar text="Search" />
      <Typography type="headLine" variant="bold" size={0} mt={60} mb={35}>
        Popular posts
      </Typography>
      <StyledPopularBlogs>
        {getPopularPosts(blogInfo).map(({ imageURL, date, title, id }) => (
          <PopularBlogCard imageURL={imageURL} date={date} title={title} key={id} id={id} />
        ))}
      </StyledPopularBlogs>
    </StyledSideBar>
  );
};

export default SidebarSection;
