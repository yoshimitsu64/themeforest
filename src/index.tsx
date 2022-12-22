import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { theme } from 'constants/theme';
import { GlobalStyles } from 'globalStyles/styled';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </HashRouter>
);
