

function Game () {
  return (

  <div id="game-container">

    <div id="game-board">
    <div id="game-over" className="modal">
    <div className="modal-background"></div>
    <div id="dsp-winner"className="modal-content">
    <div className="box">
      <h3 id="winner"></h3>
    </div>
    </div>
    <button id="close-me" className="modal-close is-large" aria-label="close"></button>
    </div>

      <div id="movements">
      <div id="0" className="default"></div>
      <div id="1" className="default"></div>
      <div id="2" className="default"></div>
      <div id="3" className="default"></div>
      <div id="4" className="default"></div>

      <div id="5" className="default"></div>
      <div id="6" className="default"></div>
      <div id="7" className="default"></div>
      <div id="8" className="default"></div>
      <div id="9" className="default"></div>

      <div id="10" className="default"></div>
      <div id="11" className="default"></div>
      <div id="12" className="default"></div>
      <div id="13" className="default"></div>
      <div id="14" className="default"></div>

      <div id="15" className="default"></div>
      <div id="16" className="default"></div>
      <div id="17" className="default"></div>
      <div id="18" className="default"></div>
      <div id="19" className="default"></div>

      <div id="20" className="default"></div>
      <div id="21" className="default"></div>
      <div id="22" className="default"></div>
      <div id="23" className="default"></div>
      <div id="24" className="default"></div>
      </div>
    </div>

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
  </div>


  )
}

export { Game };