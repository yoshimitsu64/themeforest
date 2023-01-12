import { lazy, Suspense } from 'react';

import { description } from 'mocks/index';

const TestimonialsSection = lazy(() => import('components/pagesSections/home/testimonialsSection'));
const IntroductionSection = lazy(
  () => import('components/pagesSections/aboutUs/introductionSection')
);
const CompanyOverviewSection = lazy(
  () => import('components/pagesSections/aboutUs/companyOverviewSection')
);
const CustomersSection = lazy(() => import('components/pagesSections/aboutUs/customersSection'));
const ContactUsSection = lazy(() => import('components/pagesSections/aboutUs/contactUsSection'));
const Info = lazy(() => import('components/pagesSections/aboutUs/info'));

const AboutUs = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>About us page is loading</h1>}>
      <IntroductionSection />
      <Info
        title={description[0].title}
        subtitle={description[0].subtitle}
        imageURL={description[0].imageURL}
        mt={120}
      />
      <Info
        title={description[1].title}
        subtitle={description[1].subtitle}
        imageURL={description[1].imageURL}
        mt={120}
        mb={120}
        reversed
      />
      <CompanyOverviewSection />
      <CustomersSection />
      <TestimonialsSection />
      <ContactUsSection />
    </Suspense>
  );
};

export default AboutUs;
