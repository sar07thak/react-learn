import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Context } from './useContext/context.jsx'
import { Parent } from './contextProject/parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Context/>  in this we tell the basic of Context */}
    <Parent/>
  </StrictMode>,
)
