import React from 'react';
import { useSelector } from 'react-redux';

export function Animation() {
  const img = useSelector((state) => state.game.wrongAnsCounter);
  
  //renders the 'hangman' pictures depending on the count of wrong answers
  return (
  <div className='word'>
    <img src={require('../../images/state'+img+'.GIF')} alt="Animation" className='animation__img'/>
  </div>
  );
}