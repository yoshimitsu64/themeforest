import { lazy, Suspense } from 'react';

const TestimonialsSection = lazy(() => import('pages/home/testimonialsSection'));
const ContactUsSection = lazy(() => import('components/ui/sections/contactUsSection'));
const IntroductionSection = lazy(() => import('./introductionSection'));
const SolutionsCardsSection = lazy(() => import('./solutionsCardsSection'));
const AdvantagesSection = lazy(() => import('./advantagesSection'));

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
