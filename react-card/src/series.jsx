import Data from '../src/api/data.json'

export const MovieSeries = () => {
    return(
        <>
            {
                Data.map((curElem)=>{
                  return(
                    <div key={curElem.id} className='container'>
                    <div>
                        <img src={curElem.img_url} alt="Game of Thrones" width="20%" height="20%" />
                    </div>
                    <h2>Name : {curElem.name}</h2>
                    <p>Rating : {curElem.rating}</p>
                    <p>Summary : {curElem.description} </p>
                    <p>Genre : {curElem.genre}</p>
                    <p>Cast : {curElem.cast}</p>
                    <a href={curElem.watch_url}><button>Watch-Now</button></a>
                    <hr />
                    </div>
                  )
                })
            }
        </>     
    )
}