import { Suspense, lazy } from 'react';

const IntroductionSection = lazy(() => import('pages/contacts/introductionSection'));

const MapSection = lazy(() => import('./mapSection'));

const Contacts = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Contacts are loading...</h1>}>
      <IntroductionSection />
      <MapSection />
    </Suspense>
  );
};

export default Contacts;
