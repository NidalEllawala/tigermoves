import { io } from 'socket.io-client';

import { Gameover } from './gameover';
import { Movements } from './movements';
import { InfoPanel } from './infopanel';
import { useState, useEffect } from 'react';
import { board } from './board';

import { updateMessages, updateBoard } from './helpers';

import { Board, BoardPosition } from './interfaces';


type GameProps = {
  player: string;
  id: number
}

function Game ({player, id}: GameProps) {
  const [socket, setSocket] = useState(io('http://localhost:3001'));
  const [game, setGame] = useState(board);
  const [userMessages, setUserMessages] = useState<string[]>([`${player} has joined the game-${id}`]);

  useEffect(() => {
    const test = io('http://localhost:3001');
    console.log(test);
    socket.emit('join this game', {gameId: id, player: player});
    socket.on('message', ({message}) => {
      updateMessages(message, setUserMessages)
    });
    socket.on('update board', (positions: BoardPosition) => {
      updateBoard(positions, setGame);
    })
    //socket on disconnet reconnnect
  }, [setSocket]); 

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