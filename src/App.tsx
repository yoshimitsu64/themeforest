import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from 'constants/routes';

import Layout from 'components/layout';
import Header from 'components/header';
import Footer from 'components/footer';

const ContactUsSection = lazy(() => import('components/contactUsSection'));

const App = (): JSX.Element => {
  return (
    <Layout>
      <Suspense fallback={<h1>Wait a second</h1>}>
        <Header />
        <Routes>
          <Route path={'/'} element={<Navigate to={'/home'} />} />
          {routes.map(({ id, path, component }) => (
            <Route path={path} element={component} key={id} />
          ))}
        </Routes>
        <ContactUsSection />
        <Footer />
      </Suspense>
    </Layout>
  );
};

export default App;
