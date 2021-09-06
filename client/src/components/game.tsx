import { io } from 'socket.io-client';

import { Gameover } from './gameover';
import { Movements } from './movements';
import { InfoPanel } from './infopanel';
import { useState, useEffect } from 'react';
import { board } from './board';

type GameProps = {
  player: string;
  id: number
}

function Game ({player, id}: GameProps) {
  const [game, setGame] = useState(board);
  //const [socket, setSocket] = useState(io('http://localhost:3001'));

  useEffect(() => {
    console.log('useEffect');
    const socket = io('http://localhost:3001');
    socket.emit('join this game', {gameId: id, player: player});
  }, [id, player]);


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