import {Schema, model, connect } from 'mongoose';
const mongoose = require('mongoose');

import { Board, Game, BaghChal } from './interface'

// interface Board {
//   contains: string;
//   possible_moves: (number | null)[];
//   capture: (number | null)[];
// }

// interface Game {
//   turn: number;
//   totalGoats: number;
//   totalTigers: number;
//   goatsPlaced: number;
//   goatsCaptured: number;
//   tigersTrapped: number;
//   towinTiger: number;
//   towinGoat: number;
//   gameOver: boolean;
//   winner: string;
//   board: Board[];
// }

// interface BaghChal {
//   uid: number;
//   playerCount: number;
//   isTaken: string;
//   tiger: string;
//   goat: string;
//   game: Game;
// }

const Boardschema = new Schema<Board>({
  contains: {type: String},
  possible_moves: {type: [Number]},
  capture: {type: [Number]}
});

const Gameschema = new Schema<Game>({
  turn: {type: Number},
  totalGoats: {type: Number},
  totalTigers: {type: Number},
  goatsPlaced: {type: Number},
  goatsCaptured: {type: Number},
  tigersTrapped: {type: Number},
  towinTiger: {type: Number},
  towinGoat: {type: Number},
  gameOver: {type: Boolean},
  winner: {type: String},
  board: [Boardschema]
});

const BaghChalschema = new Schema<BaghChal>({
  uid: {type: Number},
  playerCount: {type: Number},
  isTaken: {type: String},
  tiger: {type: String},
  goat: {type: String},
  game: [Gameschema]
});

const BaghChalModel = model<BaghChal>('baghchal', BaghChalschema);

// async function connectDb (): Promise<void> {
//   await connect(`mongodb://localhost:27017/newbaghchal`, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
//   });
// }

// connectDb().catch(err => console.log(err));

mongoose.connect(`mongodb://localhost:27017/newbaghchal`, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
},
function(error: any) {
  if (error) {
    console.log(error);
  } else {
    console.log('Databse connected and ready to use');
  }
}
);

export { BaghChalModel };







