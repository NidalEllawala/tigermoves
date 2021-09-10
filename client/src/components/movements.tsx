import { useState, useEffect } from 'react';
import { findPieces } from './helpers';

import { placeGoat } from './helpers';
import { Board } from './interfaces';

type MovementsProps = {
  movements: Board[];
  fnc: any;
  goatPlaced: any
}

function Movements ({movements, fnc, goatPlaced}: MovementsProps) {
  
  const selectPiece = (moves: number[], capture: number[], index: number, select: boolean) => {
    fnc((prev: Board[]) => {
      const next: Board[] = [];
      prev.forEach((item) => {
      next.push({...item, isMoveable: false});
    });
    if (moves.length) {
      moves.forEach((move) => {
        next[move].placePiece = select ? true: false;
      });
    }
    if (capture.length) {
      capture.forEach((move) => {
        next[move].capturePiece = select ? true: false;
      });
    }
    next[index].selected = select ? true: false;
    if (!select) {
      next.forEach((item) => {
        if (item.moveTo.length) {
          item.isMoveable = true;
        }
      });
    }
    return next;
    })
  }

  
  const positions = movements.map((position, index) => {
    switch (position.contains) {
      case 'tiger':
        if (position.isMoveable) {
          return <div id={index.toString()} className="default highlight" onClick={() => {selectPiece(position.moveTo, position.capture, index, true)}}>{"\u9899"}</div>
        } else if (position.selected){
          return <div id={index.toString()} className="default highlight" onClick={() => {selectPiece(position.moveTo, position.capture, index, false)}}>{"\u9899"}</div>
        } else {
          return <div id={index.toString()} className="default">{"\u9899"}</div>
        }
      case 'goat':
        return <div id={index.toString()} className="default">{"\u9898"}</div>
      default:
        if (position.placePiece) {
          return <div id={index.toString()} className="highlight move-piece"></div>
        } else if (position.capturePiece) {
          return <div id={index.toString()} className="default capture"></div>
        } else if (position.placeGoat) {
          return <div id={index.toString()} className="default highlight" onClick={() => {goatPlaced(index)}}></div>
        } else {
          return <div id={index.toString()} className="default"></div>
        }
      }
    });
  
  return (
    <div id="movements">{positions}</div>
  );
}
    
export { Movements }
