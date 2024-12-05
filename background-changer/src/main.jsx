import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Toggle } from './components/toggle'
import { DisplayArtworks } from './components/display_data'
import { Challenge } from './projects/ChallengeUseState'
import { LoginForm } from './projects/loginForm'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <Toggle /> */}
  {/* <DisplayArtworks/> */}
  {/* <Challenge/> */}
  <LoginForm />
  </StrictMode>,
)
