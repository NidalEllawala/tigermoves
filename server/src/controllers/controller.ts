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

export { helloWorld, createNewGame };