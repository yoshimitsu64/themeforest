import { lazy, Suspense } from 'react';

const TestimonialsSection = lazy(() => import('components/pagesSections/home/testimonialsSection'));
const ContactUsSection = lazy(() => import('components/contactUsSection'));
const IntroductionSection = lazy(
  () => import('components/pagesSections/solutions/introductionSection')
);
const SolutionsCardsSection = lazy(
  () => import('components/pagesSections/solutions/solutionsCardsSection')
);
const AdvantagesSection = lazy(
  () => import('components/pagesSections/solutions/advantagesSection')
);

const Solutions = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Solutions page is loading</h1>}>
      <IntroductionSection />
      <SolutionsCardsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </Suspense>
  );
};
export default Solutions;
