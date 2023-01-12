import { lazy, Suspense } from 'react';

const BlogsSection = lazy(() => import('components/pagesSections/blogs/blogsSection'));
const IntroductionSection = lazy(
  () => import('components/pagesSections/blogs/introductionSection')
);

const Blogs = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Blogs page is loading...</h1>}>
      <IntroductionSection />
      <BlogsSection />
    </Suspense>
  );
};

export default Blogs;
