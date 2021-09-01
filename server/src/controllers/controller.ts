import * as Koa from 'koa';
import { BaghChalModel } from '../model/index';
import { Game } from '../model/board';

const helloWorld = (ctx: Koa.Context) => {
  ctx.body = 'Hello Koa';
}



const createNewGame = async (ctx: Koa.Context) => {
  try {
    const choice = ctx.request.body.player;
    const rndm = Math.floor(Math.random()*100000+1).toString();
    const game = new Game;
    const newGame = new BaghChalModel({
      uid: rndm,
      playerCount: 0,
      isTaken: choice,
      tiger: '',
      goat: '',
      game: game
    });
    await newGame.save();
    ctx.body = {player: choice, gameId: newGame.uid};
    ctx.response.status = 201;
  } catch (err) {
    console.log(err);
  }
}

const joinGame = async (ctx: Koa.Context) => {
  try {
    const gameId = ctx.request.body.id;
    console.log(gameId);
    const toJoin = await BaghChalModel.findOne({uid: gameId});
    console.log(toJoin.isTaken);
    ctx.body = {player: toJoin.isTaken === 'tiger' ? 'goat' : 'tiger', gameId: toJoin.uid}
    ctx.response.status = 200;
  } catch (err) {
    console.log(err);
  }

}

export { helloWorld, createNewGame, joinGame };