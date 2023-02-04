import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newGame } from './gameSlice'

export function Nav() {
  const dispatch = useDispatch();
  const [rulesShow, setRulesShow] = useState (false)

  //uses fetch API to get new word for game
  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?lang=en')
    .then(response => response.json())
    .then((response) => { dispatch(newGame(response[0]))})
  }, [])

  // Navigation panel with new game button and rules part
  return (
  <div className='nav'>
    <button onClick={() => window.location.reload(true)}>RESTART THE GAME</button>
    <button onClick={() => setRulesShow(!rulesShow)}>RULES</button>
    {rulesShow&&<div className='nav__rules'><h3>How to play hangman</h3>
    <p>Hangman is a simple word guessing game. Players try to figure out an unknown word by guessing letters. If too many letters which do not appear in the word are guessed, the player is hanged (and loses).
    As a right letters in the word are guessed, they will show up on display. If a letter not in the word is guess, App draws a picture of a person on the gallow – one part for each incorrect letter guess. The person is drawn hanged in 10 steps. To win the game guess all the letters of the hidden word before the 10th wrong attempt happened.
    </p>
    </div>}
  </div>
  );
}
