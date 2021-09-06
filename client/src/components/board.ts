import { Board } from './interfaces';

const board: Board[] = [];

for (let i = 0; i < 25; i++) {
  board.push(
    {
      contains: '',
      selected: false,
      moveTo: false,
      moveFrom: false,
      capture: false
    }
    )
  };
  
export { board }