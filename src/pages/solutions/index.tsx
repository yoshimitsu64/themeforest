import TestimonialsSection from 'pages/home/testimonialsSection';
import ContactUsSection from 'components/ui/sections/contactUsSection';
import SolutionsCardsSection from './solutionsCardsSection';
import IntroductionSection from './introductionSection';
import AdvantagesSection from './advantagesSection';

const Solutions = (): JSX.Element => {
  return (
    <>
      <IntroductionSection />
      <SolutionsCardsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
};
export default Solutions;
