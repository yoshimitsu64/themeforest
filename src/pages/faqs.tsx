import { lazy, Suspense } from 'react';

const ContactUsSection = lazy(() => import('components/contactUsSection'));
const IntroductionSection = lazy(() => import('components/pagesSections/faqs/introductionSection'));
const FaqSection = lazy(() => import('components/pagesSections/faqs/faqSection'));

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
