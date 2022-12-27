import IntroductionSection from 'pages/services/introductionSection';
import CompanyOverviewSection from 'pages/home/сompanyOverviewSection';
import ServiceCardsSection from './serviceCardsSection';

const Services = (): JSX.Element => {
  return (
    <>
      <IntroductionSection />
      <ServiceCardsSection />
      <CompanyOverviewSection />
    </>
  );
};

export default Services;
