import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' ;
// import './style.css' ;
import { Card , Footer }  from './card.jsx';
import App from './App.jsx';
import Condition from './conditional.jsx' ;
import { MovieSeries } from './series.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Card/> */}
    {/* <Footer/> */}
    {/* <Condition/> */}
    <MovieSeries />
  </StrictMode>,
)
