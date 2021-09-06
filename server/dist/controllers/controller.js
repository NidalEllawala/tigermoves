"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinGame = exports.createNewGame = exports.helloWorld = void 0;
const index_1 = require("../model/index");
const board_1 = require("../model/board");
const helloWorld = (ctx) => {
    ctx.body = 'Hello Koa';
};
exports.helloWorld = helloWorld;
const createNewGame = async (ctx) => {
    try {
        const choice = ctx.request.body.player;
        const rndm = Math.floor(Math.random() * 100000 + 1).toString();
        const game = new board_1.Game;
        const newGame = new index_1.BaghChalModel({
            uid: rndm,
            playerCount: 0,
            isTaken: choice,
            tiger: '',
            goat: '',
            game: game
        });
        await newGame.save();
        ctx.body = { player: choice, gameId: newGame.uid };
        ctx.response.status = 201;
    }
    catch (err) {
        console.log(err);
    }
};
exports.createNewGame = createNewGame;
const joinGame = async (ctx) => {
    try {
        const gameId = ctx.request.body.id;
        const toJoin = await index_1.BaghChalModel.findOne({ uid: gameId });
        ctx.body = { player: toJoin.isTaken === 'tiger' ? 'goat' : 'tiger', gameId: toJoin.uid };
        ctx.response.status = 201;
    }
    catch (err) {
        console.log(err);
    }
};
exports.joinGame = joinGame;
//# sourceMappingURL=controller.js.map