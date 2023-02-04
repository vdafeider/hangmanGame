import React from 'react';
import { Alphabet } from './features/game_bbl/alphabet';
import './App.css';
import { Word } from './features/game_bbl/word';
import {Animation} from './features/game_bbl/animation';
import {Nav} from './features/game_bbl/nav';
import {StatisticCounter} from './features/game_bbl/statcounter';

function App() {
  return (
    <div className="App">
      <Nav/>
      <StatisticCounter/>
      <Animation/>
      <Word/>
      <Alphabet/>
    </div>
  );
}

export default App;
