import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimalProvider } from './context/AnimalContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimalProvider>
        <App />
      </AnimalProvider>
    </BrowserRouter>
  </StrictMode>,
)
