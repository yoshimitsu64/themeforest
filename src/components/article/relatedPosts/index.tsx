import { blogInfo } from 'mocks/index';

import PopularBlogCard from 'components/cards/popularBlogCard';
import Typography from 'components/typography';

import { getSortedPopularPostsByTag } from 'helpers/sortPopularPostsByTag';

import {
  StyledSideBar,
  StyledPopularBlogs,
} from 'components/pagesSections/blog/sideBarSection/styled';

const RelatedPosts = ({ tags }: { tags: Array<string> }): JSX.Element => {
  return (
    <StyledSideBar>
      <StyledPopularBlogs>
        <Typography type="headLine" variant="extraBold" size={2} mb={20} mt={70}>
          Related Post
        </Typography>
        {getSortedPopularPostsByTag(blogInfo, tags).map(({ imageURL, date, title, id }) => (
          <PopularBlogCard imageURL={imageURL} date={date} title={title} id={id} />
        ))}
      </StyledPopularBlogs>
    </StyledSideBar>
  );
};

export default RelatedPosts;
