// import { io } from './index';
// import { Socket } from 'socket.io';
// import { 
//   getGame, 
//   addPlayer 
// } from './model/gamefunctions';
// io.on("connection", (socket: Socket) => {
//   console.log('connected front end');
//   socket.on('join this game', async (join) => {
//     console.log('join this game');
//     const game = await getGame(join.gameId);
//     if (game) {
//       if (game.tiger === '' || game.goat === '') {
//         addPlayer(game, join.player, socket.id);
//     }
//   }
//   })
// });
//   //       io.to(socket.id).emit('player has joined', {player: join.player});
//   //       if (game.playerCount === 1) {
//   //         io.to(socket.id).emit('waiting for other player');
//   //       }
//   //       if (game.playerCount === 2) {
//   //         const players = getGame(join.gameId);
//   //         io.to(players.goat).to(players.tiger).emit('both players have joined');
//   //         io.to(players.goat).to(players.tiger).emit('update board', getGame(join.gameId).board.currentBoardPosition());
//   //         nextTurn(join.gameId);
//   //       }
//   //     }
//   //   } else {
//   //     io.to(socket.id).emit('server full');
//   //     socket.disconnect();
//   //     return;
//   //   }
//   // });
// //});
//# sourceMappingURL=sock.js.map