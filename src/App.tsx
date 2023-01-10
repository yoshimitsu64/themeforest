import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { links } from 'constants/links';

import ErrorBoundary from 'components/errorBoundary';
import Layout from 'components/layout';
import Header from 'components/ui/sections/header';
import Footer from 'components/ui/sections/footer';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Wait a second</h1>}>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {links.map(({ id, path, component }) => (
              <Route path={path} element={component} key={id} />
            ))}
          </Routes>
          <Footer />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
