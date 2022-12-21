import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { theme } from 'constants/theme'
import { GlobalStyles } from 'globalStyles/styled'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
