import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './style.css';
import { Form } from './form.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
