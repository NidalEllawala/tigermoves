import { BaghChalModel } from './index';


const getGame = async (id: number) => {
  const found = await BaghChalModel.findOne({uid: id}).exec();
  
  return found;
}

const addPlayer = async (game: any, player: string, sockId: string) => {
  game[player] = sockId;
  game.playerCount += 1;
  await game.save();
  return true;
}

const currentBoardPosition = (game: any) => {
  const tigers = [];
  const goats = [];
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
      goatsRemaining: game.game.totalGoats - game.game.goatsPlaced,
      goatsCaptured: game.goatsCaptured,
      tigersTrapped: game.tigersTrapped,
    } 
  };
}


export { 
  getGame,
  addPlayer,
  currentBoardPosition
 };