import 'bulma/css/bulma.min.css';

import { useState } from 'react';



function Home() {

  const [choice, setChoice] = useState('');

  function newGameInput (event: any) {
    console.log(event.target.value);
    setChoice(event.target.value);
    console.log(choice)
  }

   return (
    <div id="panel">
      <form>
      <p className="text">Play as:</p>
      <label className="radio text">
        <input type="radio" id="tiger" name="choose-player" value="tiger" onChange={newGameInput} />
        Tiger
      </label>

      <label className="radio text">
        <input type="radio" id="goat" name="choose-player" value="goat" onChange={newGameInput} />
        Goat
      </label>
      
      <a><button type="submit" className="button is-fullwidth panel-item">Start New Game</button></a>
      </form>
      <p className="text">OR</p>
      <div>
      <a href="#"> <button type="button" className="button is-fullwidth panel-item">Join Existing Game</button> </a>
      </div>

    </div>
  );

}


export {Home};