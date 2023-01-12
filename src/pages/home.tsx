import { lazy, Suspense } from 'react';

const NewSolutionsSection = lazy(() => import('components/pagesSections/home/newSolutionsSection'));
const CompanyOverviewSection = lazy(
  () => import('components/pagesSections/home/сompanyOverviewSection')
);
const IntroductionSection = lazy(() => import('components/pagesSections/home/introductionSection'));
const TestimonialsSection = lazy(() => import('components/pagesSections/home/testimonialsSection'));
const BenefitsSection = lazy(() => import('components/pagesSections/home/benefitsSection'));
const FeaturesSection = lazy(() => import('components/pagesSections/home/featuresSection'));
const PricingSection = lazy(() => import('components/pagesSections/home/pricingSection'));
const BlogSection = lazy(() => import('components/pagesSections/home/blogSection'));
const ContactUsSection = lazy(() => import('components/contactUsSection'));

const Home = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Home page is loading</h1>}>
      <IntroductionSection />
      <FeaturesSection />
      <NewSolutionsSection />
      <CompanyOverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactUsSection />
    </Suspense>
  );
};

export default Home;
