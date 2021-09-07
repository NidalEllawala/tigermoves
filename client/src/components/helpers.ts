import React from 'react';

import { Board, BoardPosition } from './interfaces';

const updateMessages = (msg: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
  setter((prev: string[]) => {
    const messages: string[] = [...prev, msg];   
    return messages;
  })
  return true;
}

const updateBoard = (positions: BoardPosition, setter:React.Dispatch<React.SetStateAction<Board[]>>) => {
  setter((prev) => {
  const next: Board[] = []; 
  prev.forEach((item) => {
  next.push({...item})
  });
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

export { updateMessages, updateBoard }