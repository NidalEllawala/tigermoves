import 'bulma/css/bulma.min.css';

import { useState } from 'react';

type StartCreatedProps = {
  gameId: number | null;
}

function StartCreated({gameId, setPlayGame, setStartCreated}: any) {

  return (
    <div id="panel">
      <form>
      <p className="text">Game ID:</p>
      <button type="button" className="button is-fullwidth panel-item">{gameId}</button>
      <p className="text">Your opponent can use this ID to join the game</p>
      <button onClick={() => {
        setPlayGame(true);
        setStartCreated(false);
      }} type="button" className="button is-fullwidth panel-item">Play Bagh Chal</button>
      </form>
    </div>
  )
}

export { StartCreated };