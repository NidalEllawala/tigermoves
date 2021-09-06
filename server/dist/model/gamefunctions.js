"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlayer = exports.getGame = void 0;
const index_1 = require("./index");
const getGame = async (id) => {
    const found = await index_1.BaghChalModel.findOne({ uid: id }).exec();
    console.log(found);
    return found;
};
exports.getGame = getGame;
const addPlayer = async (game, player, sockId) => {
    game[player] = sockId;
    game.playerCount += 1;
    await game.save();
    console.log('addPlayer', game);
};
exports.addPlayer = addPlayer;
//# sourceMappingURL=gamefunctions.js.map