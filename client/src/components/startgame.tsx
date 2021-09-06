import 'bulma/css/bulma.min.css';

import { useState } from 'react';

function StartGame({fnc, setStartCreated, setJoinExisting}: any) {

  const [choice, setChoice] = useState('');

  function newGameInput (event: any) {
    setChoice(event.target.value);
  }

  return (
    <div id="panel">
      <form onSubmit={(event) => {
        fnc(choice, event)
        }}>
      <p className="text">Play as:</p>
      <label className="radio text">
        <input type="radio" id="tiger" name="choose-player" value="tiger" onChange={newGameInput} />
        Tiger
      </label>

      <label className="radio text">
        <input type="radio" id="goat" name="choose-player" value="goat" onChange={newGameInput} />
        Goat
      </label>
      <button type="submit" className="button is-fullwidth panel-item">Start New Game</button>
      </form>
      
      <p className="text">OR</p>
      <div>
      <button onClick={() => {
        setJoinExisting(true);
      }}type="button" className="button is-fullwidth panel-item">Join Existing Game</button>
      </div>
    </div>
  )
}

export {StartGame};