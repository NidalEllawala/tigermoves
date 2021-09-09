"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goatPlaced = exports.getMoves = exports.emptySpaces = exports.getTurn = exports.currentBoardPosition = exports.addPlayer = exports.getGame = void 0;
const index_1 = require("./index");
const getGame = async (id) => {
    const found = await index_1.BaghChalModel.findOne({ uid: id }).exec();
    return found;
};
exports.getGame = getGame;
const addPlayer = async (game, player, sockId) => {
    game[player] = sockId;
    game.playerCount += 1;
    //await game.save();
    return true;
};
exports.addPlayer = addPlayer;
const currentBoardPosition = (game) => {
    const tigers = [];
    const goats = [];
    for (let i = 0; i < game.board.length; i++) {
        if (game.board[i].contains === 'tiger') {
            tigers.push(i);
        }
        else if (game.board[i].contains === 'goat') {
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
};
exports.currentBoardPosition = currentBoardPosition;
const getTurn = (game) => {
    if (game.turn % 2 != 0) {
        if (game.goatsPlaced < game.totalGoats) {
            return 'goats move - Phase 1';
        }
        else {
            return 'goats move - Phase 2';
        }
    }
    else {
        return 'tigers move';
    }
};
exports.getTurn = getTurn;
const emptySpaces = (game) => {
    const empty = [];
    for (let i = 0; i < game.board.length; i++) {
        if (game.board[i].contains === 'empty') {
            empty.push(i);
        }
    }
    return empty;
};
exports.emptySpaces = emptySpaces;
const getMoves = (player, game) => {
    const possibleMoves = [];
    for (let i = 0; i < game.board.length; i++) {
        let move = { from: 0, to: [], capture: [] };
        if (game.board[i].contains === player) {
            move.from = i;
            game.board[i].possible_moves.forEach((el, index) => {
                if (game.board[el].contains === 'empty') {
                    move.to.push(el);
                }
                else if (player === 'tiger' && game.board[el].contains === 'goat') {
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
};
exports.getMoves = getMoves;
const goatPlaced = (index, game) => {
    game.game.board[index].contains = 'goat';
    game.game.turn += 1;
    game.game.goatsPlaced += 1;
};
exports.goatPlaced = goatPlaced;
//# sourceMappingURL=gamefunctions.js.map