import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouting as router } from './AppRouting';
import './index.scss'
import { CssBaseline } from '@mui/material'
import theme from "./theme/theme.tsx";

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom'


export function AppWrapper() {
  
  // const theme = 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
