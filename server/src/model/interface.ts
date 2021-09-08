interface Board {
  contains: string;
  possible_moves: (number | null)[];
  capture: (number | null)[];
}

interface Game {
  turn: number;
  totalGoats: number;
  totalTigers: number;
  goatsPlaced: number;
  goatsCaptured: number;
  tigersTrapped: number;
  towinTiger: number;
  towinGoat: number;
  gameOver: boolean;
  winner: string;
  board: Board[];
}

interface BaghChal {
  uid: number;
  playerCount: number;
  isTaken: string;
  tiger: string;
  goat: string;
  game: Game;
}

interface Moves {
  to: number[];
  from: number;
  capture: number[];
}


export { Board, Game, BaghChal, Moves }