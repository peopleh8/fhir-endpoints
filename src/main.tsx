import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { setupStore } from './store/index.ts'
import App from './App.tsx'
import './styles/index.scss'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>,
)