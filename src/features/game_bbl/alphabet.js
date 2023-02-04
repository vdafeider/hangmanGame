import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {chckLetter} from './gameSlice';


export function Alphabet() {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.game.gameStatus);
  //function starts once after first click on the letter and starts the method in redux to check whether it is correct guess
  const handleChckLetter = (event) => {
    while(!event.currentTarget.usefirst) {
      dispatch(chckLetter(event.target.innerText));
      event.currentTarget.classList.add('btn_passive');
      event.currentTarget.usefirst=1;
    }
  }

  //this draws all the alphabet buttons
  const [abc] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  const listABC = abc.map((letter) => <li usefirst={0} key={letter} onClick={handleChckLetter} className="abc__ul-letter">{letter}</li>);

  //depends on the status of the game (playing | win | lost) will render 'win', 'lost' massages or alphbet buttons
  switch (gameStatus){
    case 'won':
      return (
        <h2>You have won !!!</h2>
      )
    case 'lost':
      return(
        <h2>You have lost !!!</h2>
      )
    default:
      return (
      <ul className='abc__ul'>
        {listABC}
      </ul>
      )
  }
}