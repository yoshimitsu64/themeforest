import { lazy, Suspense } from 'react';

const BlogsSection = lazy(() => import('components/pagesSections/blog/blogsSection'));
const IntroductionSection = lazy(() => import('components/pagesSections/blog/introductionSection'));
const Blog = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Blog is loading...</h1>}>
      <IntroductionSection />
      <BlogsSection />
    </Suspense>
  );
};

export default Blog;
