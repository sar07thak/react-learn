import gotImage from './assets/got.jpg';


const App = () => {
  const name = "GameOfThrones" ;
  const rating = 8.7 ;
  const summary = `Summary:*Game of Thrones* is a fantasy  
      series where noble families vie for the 
      Iron Throne in the Seven Kingdoms of Westeros. 
      Amid political intrigue, betrayals, and alliances,
      an ancient threat—the White Walkers—emerges. With dragons,
      magic, and complex characters, the series explores power,
      loyalty,and the harsh costs of ambition.`;
  return(
    <>
    <h2>Name:{name}</h2>
    <div>
       <img src={gotImage} alt="Game of Thrones" width="15%" height="15%" />
    </div>
    <h3>Rating:{rating}</h3>
    <p>
      {summary}
    </p>
    <hr />
    <h2>Name: Game of Thrones </h2>
    <div>
       <img src={gotImage} alt="Game of Thrones" width="15%" height="15%" />
    </div>
    <h3>Rating: 9.2</h3>
    <p>
      Summary:*Game of Thrones* is a fantasy 
      series where noble families vie for the 
      Iron Throne in the Seven Kingdoms of Westeros. 
      Amid political intrigue, betrayals, and alliances,
      an ancient threat—the White Walkers—emerges. With dragons,
      magic, and complex characters, the series explores power,
      loyalty,and the harsh costs of ambition.
    </p>
    <hr/>
    <h2>Name: Game of Thrones</h2>
    <div>
       <img src={gotImage} alt="Game of Thrones" width="15%" height="15%" />
    </div>
    <h3>Rating: 9.2</h3>
    <p> 
      Summary:*Game of Thrones* is a fantasy 
      series where noble families vie for the 
      Iron Throne in the Seven Kingdoms of Westeros. 
      Amid political intrigue, betrayals, and alliances,
      an ancient threat—the White Walkers—emerges. With dragons,
      magic, and complex characters, the series explores power,
      loyalty,and the harsh costs of ambition.
    </p>
    <hr />
    </>
  )
}


export default App ;