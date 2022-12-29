import ContactUsSection from 'components/ui/sections/contactUsSection';
import IntroductionSection from './introductionSection';
import FaqSection from './faqSection';

const Faqs = (): JSX.Element => {
  return (
    <>
      <IntroductionSection />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default Faqs;
