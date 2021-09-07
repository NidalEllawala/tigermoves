interface Board {
  contains: string;
  selected: boolean;
  moveTo: boolean;
  moveFrom: boolean;
  capture: boolean;
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

export type { Board, BoardPosition }