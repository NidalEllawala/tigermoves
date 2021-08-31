import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Home } from './components/home';
import { StartGame } from './components/startgame';
import { useState } from 'react';

const { newGame } = require('./api/api');


function App() {

  const [player, setPlayer] = useState('');
  const [gameId, setgameId] = useState('');
  const [gameCreated, setgameCreated] = useState(false);

  function setGame (player: string, e: any) {
    e.preventDefault();
    console.log('setGame called');
    console.log('line 20', player)
    newGame(player);
  }



  return (
    <div className="background">
      {player.length === 0 && gameId.length === 0 &&
        <StartGame fnc={setGame}/>
      }
    </div>
  );
}

export default App;
