import { useState } from 'react';
import { Board } from './interfaces';

type MovementsProps = {
  movements: Board[];
  fnc: any;
  goatPlaced: any,
  movePiece: any
}

function Movements ({movements, fnc, goatPlaced, movePiece}: MovementsProps) {
  const [moveFrom, setMoveFrom] = useState<number|null>(null)
  
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
      case 'goat':
        if (position.isMoveable) {
          return <div id={index.toString()} className="default highlight" onClick={() => {selectPiece(position.moveTo, position.capture, index, true); setMoveFrom(index)}}>{position.contains==='tiger' ? "\u26AB" : "\u26AA"}</div>
        } else if (position.selected){
          return <div id={index.toString()} className="default highlight" onClick={() => {selectPiece(position.moveTo, position.capture, index, false); setMoveFrom(null)}}>{position.contains==='tiger' ? "\u26AB" : "\u26AA"}</div>
        } else {
          return <div id={index.toString()} className="default">{position.contains==='tiger' ? "\u26AB" : "\u26AA"}</div>
        }
      default:
        if (position.placePiece) {
          return <div id={index.toString()} className="highlight move-piece" onClick={() => {movePiece(index, moveFrom, false)}}></div>
        } else if (position.capturePiece) {
          return <div id={index.toString()} className="default capture" onClick={() => {movePiece(index, moveFrom, true)}}></div>
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
