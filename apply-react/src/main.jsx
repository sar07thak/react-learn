import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { LightDark } from './darkandlight';
import {App} from './app';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
