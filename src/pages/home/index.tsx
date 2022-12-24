import { lazy } from 'react';

const NewSolutionsSection = lazy(
  () => import('pages/home/newSolutionsSection')
);
const CompanyOverviewSection = lazy(
  () => import('pages/home/сompanyOverviewSection')
);
const IntroductionSection = lazy(
  () => import('pages/home/introductionSection')
);
const TestimonialsSection = lazy(
  () => import('pages/home/testimonialsSection')
);
const BenefitsSection = lazy(() => import('pages/home/benefitsSection'));
const FeaturesSection = lazy(() => import('pages/home/featuresSection'));
const PricingSection = lazy(() => import('pages/home/pricingSection'));
const BlogSection = lazy(() => import('pages/home/blogSection'));

const Home = (): JSX.Element => {
  return (
    <>
      <IntroductionSection />
      <FeaturesSection />
      <NewSolutionsSection />
      <CompanyOverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
    </>
  );
};

export default Home;
