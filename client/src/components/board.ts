import { Board } from './interfaces';


const newBoard = (): Board[] => {
  const board: Board[] = [];
  for (let i = 0; i < 25; i++) {
    board.push(
      {
        contains: '',
        selected: false,
        moveTo: [],
        moveFrom: false,
        capture: [],
        isMoveable: false,
        placePiece: false,
        capturePiece: false,
        placeGoat: false
      }
      )
    };
  return board;  
}
  
export { newBoard }