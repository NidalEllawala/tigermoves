"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaghChalModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const Boardschema = new mongoose_1.Schema({
    contains: { type: String },
    possible_moves: { type: [Number] },
    capture: { type: [Number] }
});
const Gameschema = new mongoose_1.Schema({
    turn: { type: Number },
    totalGoats: { type: Number },
    totalTigers: { type: Number },
    goatsPlaced: { type: Number },
    goatsCaptured: { type: Number },
    tigersTrapped: { type: Number },
    towinTiger: { type: Number },
    towinGoat: { type: Number },
    gameOver: { type: Boolean },
    winner: { type: String },
    board: [Boardschema]
});
const BaghChalschema = new mongoose_1.Schema({
    uid: { type: Number },
    playerCount: { type: Number },
    isTaken: { type: String },
    tiger: { type: String },
    goat: { type: String },
    game: [Gameschema]
});
const BaghChalModel = mongoose_1.model('baghchal', BaghChalschema);
exports.BaghChalModel = BaghChalModel;
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
}, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Databse connected and ready to use');
    }
});
//# sourceMappingURL=index.js.map