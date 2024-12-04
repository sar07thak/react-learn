import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Toggle } from './components/toggle'
import { DisplayArtworks } from './components/display_data'
import { Challenge } from './components/ChallengeUseState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <Toggle /> */}
  <Challenge/>
  {/* <DisplayArtworks/> */}
  </StrictMode>,
)
