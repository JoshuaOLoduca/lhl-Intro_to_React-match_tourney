import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/playerList';

import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';

function App() {
  console.log('app', matchData)
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
    </h1>
    <PlayerList {...parsedPlayerData} />
    <MatchList {...matchData}/>
    </div>
  );
}

export default App;
