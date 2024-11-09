import Data from '../src/api/data.json'
import { Seriescard } from './components/seriesCard' ;


export const MovieSeries = () => {
    return(
        <>
        <h1 className='border-b border-blue-600 p-4 font-mono flex text-2xl justify-center'>List of best series :</h1>
        <ul className='p-4 grid grid-rows-2 grid-cols-2 gap-4'>
            {
                Data.map((curElem)=>{
                return (
                    <Seriescard key={curElem.id}  curElem = {curElem} name="sarthak" />  
                ) 
                })
            }
        </ul>     
        </>
    )
}