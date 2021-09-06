"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentBoardPosition = exports.addPlayer = exports.getGame = void 0;
const index_1 = require("./index");
const getGame = async (id) => {
    const found = await index_1.BaghChalModel.findOne({ uid: id }).exec();
    return found;
};
exports.getGame = getGame;
const addPlayer = async (game, player, sockId) => {
    game[player] = sockId;
    game.playerCount += 1;
    await game.save();
    return true;
};
exports.addPlayer = addPlayer;
const currentBoardPosition = (game) => {
    console.log(game);
    // const tigers = [];
    // const goats = [];
    // for (let i = 0; i < game.board.length; i++) {
    //   if (game.board[i].contains === 'tiger') {
    //     tigers.push(i);
    //   } else if (game.board[i].contains === 'goat') {
    //     goats.push(i);
    //   }
    // }
    // return {
    //   tigers: tigers, 
    //   goats: goats, 
    //   score: { 
    //     goatsRemaining: game.game.totalGoats - game.game.goatsPlaced,
    //     goatsCaptured: game.goatsCaptured,
    //     tigersTrapped: game.tigersTrapped,
    //   } 
    // };
};
exports.currentBoardPosition = currentBoardPosition;
//# sourceMappingURL=gamefunctions.js.map