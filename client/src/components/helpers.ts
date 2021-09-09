import React from 'react';

import { Board, BoardPosition, PossibleMoves, Move } from './interfaces';
import { newBoard } from './board';

const updateMessages = (msg: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
  setter((prev: string[]) => {
    const messages: string[] = [...prev, msg];   
    return messages;
  })
  return true;
}

const updateBoard = (positions: BoardPosition, setter:React.Dispatch<React.SetStateAction<Board[]>>) => {
  setter((prev: Board[]) => {
  const next: Board[] = newBoard()
  // []; 
  // prev.forEach((item) => {
  // next.push({...item})
  // });
  positions.tigers.forEach((item: number) => {
    next[item].contains = 'tiger'
  });
  positions.goats.forEach((item: number) => {
    next[item].contains = 'goat'
  });
  return next;
  });
  return true
}

const findPieces = (moves: PossibleMoves, setter:React.Dispatch<React.SetStateAction<Board[]>>) => {
  setter((prev: Board[]) => {
    const next: Board[] = []; 
    prev.forEach((item) => {
    next.push({...item})
  });
  moves.possibleMoves.forEach((move: Move) => {
    next[move.from].isMoveable = true; 
    next[move.from].moveTo = move.to;
    next[move.from].capture = move.capture;
  });

  return next;
  })

}

const placeGoat = (spaces: number[], setter:React.Dispatch<React.SetStateAction<Board[]>>) => {
  setter((prev: Board[]) => {
    const next: Board[] = [];
    prev.forEach((item) => {
      next.push({...item})
    });
    spaces.forEach((space) => {
      next[space].placeGoat = true;
    });
    return next;
  })
}

export { updateMessages, updateBoard, findPieces, placeGoat }