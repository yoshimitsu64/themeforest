import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { links } from 'constants/links';

import ErrorBoundary from 'components/business/errorBoundary';
import Layout from 'components/ui/layout';
import Header from 'components/ui/sections/header';
import Footer from 'components/ui/sections/footer';

const App = (): JSX.Element => {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<h1>Wait a second</h1>}>
          <Header />
          <Routes>
            <Route path={'/'} element={<Navigate to={'/home'} />} />
            {links.map(({ id, path, component }) => (
              <Route path={path} element={component} key={id} />
            ))}
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
