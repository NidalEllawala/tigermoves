import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Home } from './components/home';
import { StartGame } from './components/startgame';
import { StartCreated } from './components/startcreated';
import { JoinExistingGame } from './components/joinexisting';

const { newGame } = require('./api/api');


function App() {

  const [playerRole, setPlayerRole] = useState(null);
  const [gameId, setgameId] = useState(null);

  const [startCreated, setStartCreated] = useState(false);
  
  const [joinExisting, setJoinExisting] = useState(false);

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

  function joinExistingGame (e: any) {
    console.log('join called')
    setJoinExisting(true);
  }



  return (
    <div className="background">
      {playerRole === null && gameId === null && joinExisting === false &&
        <StartGame fnc={createGame} handleJoin={joinExistingGame}/>
      }

      {startCreated &&
        <StartCreated gameId={gameId}/> 
      }

      {joinExisting && 
        <JoinExistingGame handleJoin={joinExistingGame}/>
      }
    </div>
  );
}

export default App;
