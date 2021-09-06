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
  const [userMessages, setUserMessages] = useState<string[]>([`${player} has joined the game-${id}`]);

  useEffect(() => {
    console.log('useEffect');
    const socket = io('http://localhost:3001');
    socket.emit('join this game', {gameId: id, player: player});

    socket.on('message', ({message}) => {
      setUserMessages((prev) => {
        const messages = [...prev, message];
        console.log(messages);
        return messages;
      })
    })
  }, [id, player]);


  return (
  <div id="game-container">
    <div id="game-board">
      <Gameover />
      <Movements movements={game}/>
    </div>
    <InfoPanel messages={userMessages}/>
  </div>
  )
}

export { Game };