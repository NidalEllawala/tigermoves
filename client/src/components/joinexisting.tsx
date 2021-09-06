import { useState } from 'react';

function JoinExistingGame ({handleJoin, setJoinExisting}: any) {

  const [gameId, setGameId] = useState(0);

  function handleInput (event: any) {
    setGameId(event.target.value);
    
  }

  return (
    <div id="panel">
      <form onSubmit={(event) => {
        handleJoin(gameId, event);
        setJoinExisting(false)
      }}>
        <label className="text">Enter your game id below:
          <input onChange={handleInput} type="number" name="id" id="id" />
        </label>
        <button type="submit" className="button is-fullwidth panel-item">Play Bagh Chal</button>
      </form>
    </div>
  )
}

export { JoinExistingGame };