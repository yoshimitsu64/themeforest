import { IBlog } from 'appTypes/index';
import { getPopularPosts } from 'helpers/getPopularPosts';

export const getSortedPopularPostsByTag = (
  posts: Array<IBlog>,
  releatedPostsTags: IBlog['tags']
) => {
  return getPopularPosts(
    [...posts].filter((post) => post.tags.some((item) => releatedPostsTags.includes(item)) && post)
  );
};
