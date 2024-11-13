import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App'
import { Toggle } from './components/toggle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
<Toggle />
  </StrictMode>,
)
