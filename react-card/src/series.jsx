import Data from '../src/api/data.json'
import { Seriescard } from './components/seriesCard' ;


export const MovieSeries = () => {
    return(
        <div className='bg-[#242424]  text-white p-4 '>
            {
                Data.map((curElem)=>{
                return (
                    <Seriescard key={curElem.id}  curElem = {curElem} name="sarthak" />  
                ) 
                })
            }
        </div>     
    )
}