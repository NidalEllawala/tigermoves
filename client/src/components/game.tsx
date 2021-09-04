import { Gameover } from './gameover';
import { Movements } from './movements';
import { InfoPanel } from './infopanel';
import { useState } from 'react';
import { board } from './board';


function Game () {

  const [game, setGame] = useState(board);


  
  return (
  <div id="game-container">
    <div id="game-board">
      <Gameover />
      <Movements movements={game}/>
    </div>
    <InfoPanel />
  </div>
  )
}

export { Game };