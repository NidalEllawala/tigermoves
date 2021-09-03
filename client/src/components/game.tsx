import { Gameover } from './gameover';
import { Movements } from './movements';
import { InfoPanel } from './infopanel';

function Game () {
  return (
  <div id="game-container">
    <div id="game-board">
      <Gameover />
      <Movements />
    </div>
    <InfoPanel />
  </div>
  )
}

export { Game };