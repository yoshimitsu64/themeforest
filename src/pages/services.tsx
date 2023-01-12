import { Suspense, lazy } from 'react';

const IntroductionSection = lazy(
  () => import('components/pagesSections/services/introductionSection')
);
const CompanyOverviewSection = lazy(
  () => import('components/pagesSections/home/сompanyOverviewSection')
);
const ServiceCardsSection = lazy(
  () => import('components/pagesSections/services/serviceCardsSection')
);
const ContactUsSection = lazy(() => import('components/contactUsSection'));

function Services(): JSX.Element {
  return (
    <Suspense fallback={<h1>Services are loading...</h1>}>
      <IntroductionSection />
      <ServiceCardsSection />
      <CompanyOverviewSection />
      <ContactUsSection />
    </Suspense>
  );
}

export default Services;
