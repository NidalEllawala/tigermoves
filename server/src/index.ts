const Koa = require('koa');
const app = new Koa();
import { router } from './router';
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
import { Server, Socket } from "socket.io";
const httpServer = require('http').createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

import { 
  getGame, 
  addPlayer,
  currentBoardPosition,
  getTurn,
  emptySpaces,
  getMoves,
  goatPlaced
} from './model/gamefunctions';


const PORT = 3001;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

io.on('connection', (socket: Socket) => {

  socket.on('join this game', async (join: {gameId: number, player: string}) => {
    const game = await getGame(join.gameId);
    if (game) {
      if (game.tiger === '' || game.goat === '') {
        await addPlayer(game, join.player, socket.id);
        await game.save();
      }
      if (game.playerCount === 1) {
        io.to(socket.id).emit('message', {message: 'waiting for other player'});
      }
      if (game.playerCount === 2) {
        io.to(game.goat).to(game.tiger).emit('message', {message: 'both players have joined'});
        const board = currentBoardPosition(game.game);
        io.to(game.goat).to(game.tiger).emit('update board', board);
        nextTurn(game);
      }
    }
  });

  socket.on('goat placed', async (move: {index: number, gameId: number}) => {
    console.log(move)
    const game = await getGame(move.gameId);
    goatPlaced(move.index, game);
    await game.save();
    const board = currentBoardPosition(game.game);
    io.to(game.goat).to(game.tiger).emit('update board', board);
    //nextTurn(game);
    // io.to(game.goat).to(game.tiger).emit('update board', game.board.currentBoardPosition());
  })

  async function nextTurn(game: any): Promise<void>{
    const turn: string = getTurn(game.game);
    console.log(turn)
    switch(turn) {
      case 'goats move - Phase 1':
        const spaces = emptySpaces(game.game);
        io.to(game.goat).emit('place goat', {emptySpaces: spaces});
        break;
      case 'goats move - Phase 2':
        const goatsMoves = getMoves('goat', game.game);
        io.to(game.goat).emit('goats turn', {possibleMoves: goatsMoves});
        break;
      case 'tigers move':
        console.log('case called');
        const tigersMoves = getMoves('tiger', game.game);
        await game.save()
        io.to(game.tiger).emit('tigers turn', {possibleMoves: tigersMoves});
        break;
    }
  }

})


httpServer.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
