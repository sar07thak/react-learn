export const Seriescard = ( {curElem } ) => {
    return(
        <li id="key" className=' font-mono flex justify-between mb-2 items-center rounded-md shadow-md shadow-blue-600'>
        <h1 className="text-lg  w-40 text-center  font-bold">Name : {curElem.name}</h1>
        <div className="p-1">
            <img src={curElem.img_url} alt="Game of Thrones" className="h-32 w-32 rounded-full  object-cover " />
        </div>
        <div className=" w-[60%]  p-2">
        <p>Rating : {curElem.rating}</p>
        <p>Summary : {curElem.description} </p>
        <p>Genre : {curElem.genre}</p>
        <p>Cast : {curElem.cast}</p>
        <a href={curElem.watch_url}><button className=" w-36 p-1 bg-blue-600 text-white rounded-lg text-lg mt-1">Watch-Now</button></a> 
        </div>
        
        </li>
      )
}