import { lazy, Suspense } from 'react';
import { description } from 'constants/aboutUs/description';

const TestimonialsSection = lazy(() => import('pages/home/testimonialsSection'));
const IntroductionSection = lazy(() => import('./introductionSection'));
const CompanyOverviewSection = lazy(() => import('./companyOverviewSection'));
const CustomersSection = lazy(() => import('./customersSection'));
const ContactUsSection = lazy(() => import('./contactUsSection'));
const Info = lazy(() => import('./info'));

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
      <TestimonialsSection count={2} />
      <ContactUsSection />
    </Suspense>
  );
};

export default AboutUs;
