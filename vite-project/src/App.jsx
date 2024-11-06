import gotImage from './assets/got.jpg';

const App = () => {
  return (
    <>
      <h2>Name: Game of Thrones</h2>
      <h3>Rating: 9.2</h3>
      <p>
        Summary: *Game of Thrones* is a fantasy series where noble families vie for the Iron Throne in the Seven Kingdoms of Westeros. 
        Amid political intrigue, betrayals, and alliances, an ancient threat—the White Walkers—emerges. 
        With magic and complex characters, the series explores loyalty, and the harsh costs of ambition.
      </p>
      <div>
        <img src={gotImage} alt="Game of Thrones" width="10%" />
      </div>
    </>
  );
};

export default App;
