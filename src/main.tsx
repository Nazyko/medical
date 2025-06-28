import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider defaultColorScheme='dark'>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
