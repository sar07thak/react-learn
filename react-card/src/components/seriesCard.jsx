export const Seriescard = ( {curElem } ) => {
    return(
        <li id="key" className='min-w-[250px] h-[30em]  w-[100%] font-mono flex flex-col justify-between items-center rounded-md shadow-md shadow-blue-600'>
        <div className="mb-16 p-1 h-40  w-[70%]">
            <img src={curElem.img_url} alt="Game of Thrones" className=" w-[100%]  object-cover " />
        </div>
        <h1 className=" text-lg text-center font-bold">Name : {curElem.name}</h1>
        <div className="  p-2">
        <p>Rating : <span className={curElem.rating <=8.5 ? ' bg-orange-400  w-32 p-1.5 rounded-xl text-white ' : 'text-white c bg-green-400  w-32 p-1.5 rounded-xl ' }> ⭐{curElem.rating}  </span> </p>
        <p>Summary : {curElem.description} </p>
        <p>Genre : {curElem.genre}</p>
        <p>Cast : {curElem.cast}</p>
        <a href={curElem.watch_url}><button className={curElem.rating <=8.5 ? 'w-36 p-1 bg-orange-400 cursor-pointer hover:bg-orange-600 text-white rounded-lg text-lg mt-1' : 'w-36 p-1 cursor-pointer hover:bg-green-600 bg-green-400 font-medium text-white rounded-lg text-lg mt-1'}>Watch-Now</button></a> 
        </div>
        
        </li>
      )
}

