import Player from './Player.js';

function PlayerList(props) {

  const parsedPlayerList = Object.values(props).map(player => <Player {...player} />);

    return (
      <section className="PlayerList">
        <h1>Current participating players</h1>
        {parsedPlayerList}
      </section>
    );
}

export default PlayerList;