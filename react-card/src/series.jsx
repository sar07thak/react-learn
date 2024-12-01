import Data from '../src/api/data.json'
import { Seriescard } from './components/seriesCard' ;


export const MovieSeries = () => {
    return(
        <>
        <h1 className='border-b text-blue-600 border-blue-600 p-4 font-mono flex flex-wrap text-2xl justify-center'>List of best series :</h1>
        <div className='p-4 grid md:grid-rows-3 md:grid-cols-3 sm:grid-rows-2 sm:grid-cols-2 gap-4 '>
            {
                Data.map((data)=>{
                 return (
                    <Seriescard key={data.id}  curElem = {data} name="sarthak" />  
                ) 
                })
            }
        </div>     
        </>
    )
}