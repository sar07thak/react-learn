import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
// import './style.css' ;
import { Card , Footer }  from './card.jsx';
import App from './App.jsx';
import { MovieSeries } from './series.jsx';
import Profile from './components/profile.jsx';
import { Eventhandleing } from './components/eventHandling.jsx';
import { EventProps } from './components/eventProps.jsx';
import { State } from './components/hooks/state.jsx';
import { DerivedState } from './components/hooks/hooksChallege.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Card/> */}
    {/* <Footer/> */}
    {/* <MovieSeries /> */}
    {/* <Profile/> */}
    <Eventhandleing/>
    {/* <EventProps/> */}
    {/* <State /> */}
    {/* <DerivedState/> */}
  </StrictMode>,
)
