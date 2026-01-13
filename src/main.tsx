import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouting as router } from './AppRouting';
import './index.scss'
import { CssBaseline } from '@mui/material'
import theme from "./theme/theme.tsx";

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from './provider/QueryProvider.tsx';
import { NotificationProvider } from './provider/NotificationProvider.tsx';


export function AppWrapper() {
  
  // const theme = 

  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <NotificationProvider>
            <RouterProvider router={router} />
          </NotificationProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
