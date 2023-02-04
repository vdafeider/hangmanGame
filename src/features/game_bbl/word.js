import React from 'react';
import { useSelector } from 'react-redux';

export function Word() {
  const dispWord = useSelector((state) => state.game.hiddenLetters);

  //renders the the hidden word to be guessed
  return (
  <div className='word'>
    <h1>Guess the word:</h1>
    <div className='word__disp'>{dispWord}</div>
  </div>
  );
}