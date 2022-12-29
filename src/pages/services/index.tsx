import { Suspense, lazy } from 'react';

const IntroductionSection = lazy(() => import('./introductionSection'));
const CompanyOverviewSection = lazy(() => import('pages/home/сompanyOverviewSection'));
const ServiceCardsSection = lazy(() => import('./serviceCardsSection'));
const ContactUsSection = lazy(() => import('components/ui/sections/contactUsSection'));

const Services = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Services are loading...</h1>}>
      <IntroductionSection />
      <ServiceCardsSection />
      <CompanyOverviewSection />
      <ContactUsSection />
    </Suspense>
  );
};

export default Services;
