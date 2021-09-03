
function InfoPanel () {
  return (
    <div id="info-panel"> 
      <div className="box">
        <button type="button" id="tiger-turn" className="button is-fullwidth is-medium" >TIGER</button>
        <button type="button" id="goat-turn" className="button is-fullwidth is-medium" >GOAT</button>
        <div id="message" className="box">
          <p>You have joined the game</p>
        </div>
        <table className="table is-striped">
          <tr>
            <th>Goat's Remaining</th>
            <td id="goats-remaining"></td>
          </tr>
          <tr>
            <th>Goat's Killed</th>
            <td id="goats-captured"></td>
          </tr>
          <tr>
            <th>Tigers Trapped</th>
            <td id="tigers-trapped"></td>
          </tr>
        </table>
        <input type="hidden" id="game-id" value="{{gameId}}"/>
        <input type="hidden" id="player" value="{{player}}"/>
        <a href="#" id="sng" className="button is-primary is-fullwidth">Start Playing</a>
      </div>
    </div>
  );
}

export { InfoPanel }