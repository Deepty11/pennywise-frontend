import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from '/src/pages/login_page.jsx'
import { ThemeProvider } from '@emotion/react'
import {theme} from './utility/theme'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <LoginPage />
    </StrictMode>
  </ThemeProvider>
  
)
