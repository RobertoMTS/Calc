import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './Components/App.jsx'; 

const root = document.querySelector('#root')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
