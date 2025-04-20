import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvidor from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvidor>
    <App />
  </ContextProvidor>,
)
