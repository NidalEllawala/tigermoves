interface Board {
  contains: string;
  selected: boolean;
  moveTo: number[];
  moveFrom: boolean;
  capture: number[];

  isMoveable: boolean;
  placePiece: boolean;
  capturePiece: boolean;
  placeGoat: boolean;
}

interface BoardPosition {
  tigers: number[]; 
  goats: number[]; 
  score: { 
      goatsRemaining: number;
      goatsCaptured: number;
      tigersTrapped: number;
  }
}

interface Move {
  to: number[];
  from: number;
  capture:number[];
}

interface PossibleMoves {
  possibleMoves: Move[];
}


export type { Board, BoardPosition, PossibleMoves, Move }