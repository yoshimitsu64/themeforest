import NewSolutionsSection from 'pages/home/newSolutionsSection';
import CompanyOverviewSection from 'pages/home/сompanyOverviewSection';
import BenefitsSection from 'pages/home/benefitsSection';
import IntroductionSection from 'pages/home/introductionSection';
import FeaturesSection from 'pages/home/featuresSection';
import TestimonialsSection from 'pages/home/testimonialsSection';

const Home = (): JSX.Element => {
  return (
    <>
      <IntroductionSection />
      <FeaturesSection />
      <NewSolutionsSection />
      <CompanyOverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
