
import { BaghChalModel } from './index';
import { Moves, BaghChal } from './interface';

const getGame = async (id: number) => {
  const found = await BaghChalModel.findOne({uid: id}).exec();
  return found;
}

const addPlayer = async (game: any, player: string, sockId: string) => {
  game[player] = sockId;
  game.playerCount += 1;
  //await game.save();
  return true;
}

const currentBoardPosition = (game: any) => {
  const tigers: number[] = [];
  const goats: number[] = [];
  for (let i = 0; i < game.board.length; i++) {
    if (game.board[i].contains === 'tiger') {
      tigers.push(i);
    } else if (game.board[i].contains === 'goat') {
      goats.push(i);
    }
  }
  return {
    tigers: tigers, 
    goats: goats, 
    score: { 
      goatsRemaining: game.totalGoats - game.goatsPlaced,
      goatsCaptured: game.goatsCaptured,
      tigersTrapped: game.tigersTrapped,
    } 
  };
}

const getTurn = (game: any) => {
  if (game.turn %2 != 0) {
    if (game.goatsPlaced < game.totalGoats) {
      return 'goats move - Phase 1';
    } else {
      return 'goats move - Phase 2';
    }
  } else {
    return 'tigers move';
  }
}

const emptySpaces = (game: any): number[] => {
  const empty: number[] = [];
  for (let i = 0; i  < game.board.length; i++) {
    if (game.board[i].contains === 'empty') {
      empty.push(i);
    }
  }
  return empty;
}

const getMoves = (player: string, game: any) => {
  const possibleMoves = [];
  for (let i = 0; i < game.board.length; i++) {
    let move: Moves = {from: 0, to: [], capture:[]};
    if (game.board[i].contains === player) {
      move.from = i;
      game.board[i].possible_moves.forEach( (el: number, index: number) => {
        if (game.board[el].contains === 'empty') {
          move.to.push(el);
        } else if (player === 'tiger' && game.board[el].contains === 'goat') {
          if (game.board[i].capture[index] != null && game.board[game.board[i].capture[index]].contains === 'empty') {
            move.capture.push(game.board[i].capture[index]);
          }
        } 
      });
      if (move.to.length || move.capture.length) {
        possibleMoves.push(move);
      }
    }
  }
  if (player === 'tiger') {
    game.tigersTrapped = game.totalTigers - possibleMoves.length;
  }
  return possibleMoves;
}

const goatPlaced = (index: number, game: BaghChal) => {
  game.game.board[index].contains = 'goat';
  game.game.turn += 1;
  game.game.goatsPlaced += 1;
}

const movePiece = (move: {to: number, from: number, gameId: number, capture: boolean}, game: BaghChal) => {
  game.game.board[move.to].contains = game.game.board[move.from].contains;
  game.game.board[move.from].contains = 'empty';
  game.game.turn += 1;
  if (move.capture) {
    game.game.board[game.game.board[move.from].possible_moves[game.game.board[move.from].capture.indexOf(move.to)]].contains = 'empty';
    game.game.goatsCaptured += 1;
  }
}





export { 
  getGame,
  addPlayer,
  currentBoardPosition,
  getTurn,
  emptySpaces,
  getMoves,
  goatPlaced,
  movePiece
 };