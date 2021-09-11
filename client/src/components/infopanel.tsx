import { Score } from './interfaces';

type InfoPanelProps = {
  messages: string[];
  score: Score;
}


function InfoPanel ({messages, score}: InfoPanelProps) {
  const showMessages = messages.map((message) => {
    return (<p>{message}</p>)
  })
  return (
    <div id="info-panel"> 
      <div className="box">
        <button type="button" id="tiger-turn" className="button is-fullwidth is-medium" >TIGER</button>
        <button type="button" id="goat-turn" className="button is-fullwidth is-medium" >GOAT</button>
        <div id="message" className="box">
          {showMessages}
        </div>
        <table className="table is-striped">
          <tr>
            <th>Goat's Remaining</th>
            <td id="goats-remaining">{score.goatsRemaining}</td>
          </tr>
          <tr>
            <th>Goat's Killed</th>
            <td id="goats-captured">{score.goatsCaptured}</td>
          </tr>
          <tr>
            <th>Tigers Trapped</th>
            <td id="tigers-trapped">{score.tigersTrapped}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export { InfoPanel }

/*
<input type="hidden" id="game-id" value="{{gameId}}"/>
        <input type="hidden" id="player" value="{{player}}"/>
        <a href="#" id="sng" className="button is-primary is-fullwidth">Start Playing</a>
*/