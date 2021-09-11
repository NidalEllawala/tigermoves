import { io } from 'socket.io-client';

import { Gameover } from './gameover';
import { Movements } from './movements';
import { InfoPanel } from './infopanel';
import { useState, useEffect } from 'react';
import { newBoard } from './board';

import { 
  updateMessages,
  updateBoard,
  findPieces,
  placeGoat
} from './helpers';

import { Board, BoardPosition } from './interfaces';


type GameProps = {
  player: string;
  id: number
}

function Game ({player, id}: GameProps) {
  const [socket, setSocket] = useState(io('http://localhost:3001'));
  const [game, setGame] = useState(newBoard());
  const [userMessages, setUserMessages] = useState<string[]>([`${player} has joined the game-${id}`]);

  const goatPlaced = (index: number) => {
    socket.emit('goat placed', {
      index,
      gameId: id
    });
  }

  const movePiece = (to: number, from: number, capture: boolean) => {
    socket.emit('move piece', {
      to,
      from,
      capture,
      gameId: id
    });

  }

  useEffect(() => {
    socket.emit('join this game', {gameId: id, player: player});
    
    socket.on('message', ({message}) => {
      updateMessages(message, setUserMessages)
    });
    socket.on('update board', (positions: BoardPosition) => {
      updateBoard(positions, setGame);
    });
    socket.on('tigers turn', (moves) => {
      findPieces(moves, setGame);
    });
    socket.on('place goat', (moves) => {
      placeGoat(moves.emptySpaces, setGame);
    });
    //socket on disconnet reconnnect
  }, [setSocket]); 

  return (
  <div id="game-container">
    <div id="game-board">
      <Gameover />
      <Movements movements={game} fnc={setGame} goatPlaced={goatPlaced} movePiece={movePiece}/>
    </div>
    <InfoPanel messages={userMessages}/>
  </div>
  )
}

export { Game };