import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './app.jsx'
// import { ShortCkt } from './video43.jsx'
// import { Challenge } from './useState.jsx'
// import { Byuseeffect } from '../hooks/useEffect'
// import { Date } from '../hooks/useEffect'
import { ChallengeEffect } from '../hooks/ChallengeUseEffect'
import { UseRef } from '../hooks/useRef'
import { UseId } from '../hooks/useId'
import { ParentComponent } from '../hooks/propsdrilling'
import { Reducer } from '../hooks/useReducer'
import { Memo } from '../hooks/useMemo'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ShortCkt/> */}
    {/* <Challenge/> */}
    {/* <Byuseeffect/> */}
    {/* <Date/> */}
    {/* <ChallengeEffect /> */}
    {/* <UseRef/> */}
    {/* <UseId/> */}
    {/* <Reducer/> */}
    <Memo/>
  </StrictMode>,
)
