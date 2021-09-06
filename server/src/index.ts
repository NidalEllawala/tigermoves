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
  currentBoardPosition 
} from './model/gamefunctions';

const PORT = 3001;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

io.on('connection', (socket: Socket) => {

  socket.on('join this game', async (join) => {
    const game = await getGame(join.gameId);
    
    if (game) {
      if (game.tiger === '' || game.goat === '') {
        await addPlayer(game, join.player, socket.id);
      }
      if (game.playerCount === 1) {
        io.to(socket.id).emit('message', {message: 'waiting for other player'});
      }
      if (game.playerCount === 2) {
        //const players = getGame(join.gameId);
        io.to(game.goat).to(game.tiger).emit('message', {message: 'both players have joined'});
        console.log(game.game);
        currentBoardPosition(game.game);
        //io.to(game.goat).to(game.tiger).emit('update board', currentBoardPosition(game.game));
        //io.to(game.goat).to(game.tiger).emit('update board', getGame(join.gameId).board.currentBoardPosition());
        //nextTurn(join.gameId);
      }
    }
  });

})

//io.on("connection", (socket: Socket) => {

  // socket.on('join this game', (join) => {
  //   if (gameExists(join.gameId)) {
  //     const game = getGame(join.gameId)
  //     if (game.tiger === '' || game.goat === '') {
  //       addPlayer(join.gameId, join.player, socket.id);
  //       io.to(socket.id).emit('player has joined', {player: join.player});
  //       if (game.playerCount === 1) {
  //         io.to(socket.id).emit('waiting for other player');
  //       }
  //       if (game.playerCount === 2) {
  //         const players = getGame(join.gameId);
  //         io.to(players.goat).to(players.tiger).emit('both players have joined');
  //         io.to(players.goat).to(players.tiger).emit('update board', getGame(join.gameId).board.currentBoardPosition());
  //         nextTurn(join.gameId);
  //       }
  //     }
  //   } else {
  //     io.to(socket.id).emit('server full');
  //     socket.disconnect();
  //     return;
  //   }
  // });
//});

httpServer.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

//export { httpServer };


// app.listen(PORT, () => {
//   console.log(`server listening on http://localhost:${PORT}`);
// });