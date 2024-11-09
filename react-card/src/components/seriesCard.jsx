export const Seriescard = ( {curElem } ) => {
    return(
        <li id="key" className='min-w-80 font-mono flex flex-col justify-between w-[50%] items-center rounded-md shadow-md shadow-blue-600'>
        <div className="p-1 border">
            <img src={curElem.img_url} alt="Game of Thrones" className="h-32 w-72   object-cover " />
        </div>
        <h1 className="text-lg  w-40 text-center border font-bold">Name : {curElem.name}</h1>
        <div className=" w-[60%] border p-2">
        <p>Rating : <span className={curElem.rating <=8.5 ? ' bg-orange-400  w-32 p-1.5 rounded-xl text-white ' : 'text-white c bg-green-400  w-32 p-1.5 rounded-xl ' }> ⭐{curElem.rating}  </span> </p>
        <p>Summary : {curElem.description} </p>
        <p>Genre : {curElem.genre}</p>
        <p>Cast : {curElem.cast}</p>
        <a href={curElem.watch_url}><button className={curElem.rating <=8.5 ? 'w-36 p-1 bg-orange-400 cursor-pointer hover:bg-orange-600 text-white rounded-lg text-lg mt-1' : 'w-36 p-1 cursor-pointer hover:bg-green-600 bg-green-400 font-medium text-white rounded-lg text-lg mt-1'}>Watch-Now</button></a> 
        </div>
        
        </li>
      )
}

// w-36 p-1 bg-blue-600 text-white rounded-lg text-lg mt-1