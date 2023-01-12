import { IBlog } from 'appTypes/index';

export const getPopularPosts = (posts: Array<IBlog>) => {
  return [...posts].sort((a, b) => a.views - b.views).slice(0, 3);
};
