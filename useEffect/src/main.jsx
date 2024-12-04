import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './app.jsx'
// import { ShortCkt } from './video43.jsx'
import { Challenge } from './useState.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ShortCkt/> */}
    <Challenge/>
  </StrictMode>,
)
