import gotImage from './assets/got.jpg' ;

export const Card = () => {
    return(
        <>
          <CardOverview/>
          <CardOverview/>
        </>
    )
}

const CardOverview = () => {
    const name = "Game of thrones";
    const rating = 9.2 ;
    const summary = `
    *Game of Thrones* is a fantasy series where noble families
    vie for the Iron Throne in the Seven Kingdoms of Westeros.
    Amid political intrigue, betrayals, and alliances, an ancient 
    threat—the White Walkers—emerges. With dragons, magic, and complex
    characters, the series explores power, loyalty, and the harsh costs
    of ambition.`;

    let age = 14 ;
    // let canWatch = "not available" ;
    // if ( age >= 18) {
    //     canWatch = "available";
    // }



    return(
        <div>
            <h2>Name : {name}</h2>
            <div>
                <img src={gotImage} alt="Game of Thrones" width="20%" height="20%" />
            </div>
            <p>Rating : {rating}</p>
            <p>Summary : {summary} </p>
            {/* // ?------------ using terinary operator-------------//  */}
            <button> {age >= 18 ? "watch-now" : "not available" }</button>
            {/* <button>{canWatch}</button> */}
            
            <hr/>
        </div>
    )
}

export const Footer = () => {
    return(
        <>
        <p>copyright : @sathak</p>
        </>
    )
}

// export default Card ;