import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import { Details } from './pages/Details'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
