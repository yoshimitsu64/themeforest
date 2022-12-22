import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from 'constants/routes';
import Layout from 'components/layout';
import Header from 'components/header';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/home'} />} />

        {routes.map(({ id, path, component }) => (
          <Route path={path} element={component} key={id} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
