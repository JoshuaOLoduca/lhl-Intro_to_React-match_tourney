import Match from './Match.js';

function MatchList(props) {
  const parsedMatches = Object.values(props).map(match => <Match {...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;