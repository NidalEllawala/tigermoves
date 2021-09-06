import { BaghChalModel } from './index';


const getGame = async (id: number) => {
  const found = await BaghChalModel.findOne({uid: id}).exec();
  console.log(found);
  return found;
}

const addPlayer = async (game: any, player: string, sockId: string) => {
  game[player] = sockId;
  game.playerCount += 1;
  await game.save();
  console.log('addPlayer', game);
}

export { 
  getGame,
  addPlayer
 };