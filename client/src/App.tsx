import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Home } from './components/home';
import { StartGame } from './components/startgame';
import { StartCreated } from './components/startcreated';
import { JoinExistingGame } from './components/joinexisting';
import { Game } from './components/game';

const { newGame, joinGame } = require('./api/api');


function App() {

  const [playerRole, setPlayerRole] = useState(null);
  const [gameId, setgameId] = useState(null);

  const [startCreated, setStartCreated] = useState(false);
  const [joinExisting, setJoinExisting] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  function createGame (playerRole: string, e: any) {
    e.preventDefault();
    console.log('setGame called');
    console.log('line 20', playerRole)
    newGame('http://localhost:3001/newGame', playerRole)
    .then((result: any) => {
      console.log(result)
      setgameId(result.gameId);
      setPlayerRole(result.player);
      setStartCreated(true);
    });
  }

  function joinExistingGame (id: number, e: any) {
    e.preventDefault();
    joinGame('http://localhost:3001/joinGame', id)
    .then((result: any) => {
      setgameId(result.gameId);
      setPlayerRole(result.player);
      setPlayGame(true);
      console.log(gameId);
      console.log(playerRole);
    });
  }


  return (
    <div className="background">
      {playerRole === null && gameId === null && joinExisting === false &&
        <StartGame fnc={createGame} setStartCreated={setStartCreated} setJoinExisting={setJoinExisting}/>
      }

      {startCreated &&
        <StartCreated gameId={gameId} setPlayGame={setPlayGame} setStartCreated={setStartCreated}/> 
      }

      {joinExisting && 
        <JoinExistingGame handleJoin={joinExistingGame}/>
      }

      {playGame &&
        <Game />
      }
    </div>
  );
}

export default App;
