import { lazy, Suspense } from 'react';

const ContactUsSection = lazy(() => import('components/ui/sections/contactUsSection'));
const IntroductionSection = lazy(() => import('./introductionSection'));
const FaqSection = lazy(() => import('./faqSection'));

const Faqs = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>FAQs are loading...</h1>}>
      <IntroductionSection />
      <FaqSection />
      <ContactUsSection />
    </Suspense>
  );
};

export default Faqs;
