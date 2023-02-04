import React, { useState } from 'react';
import {  useSelector } from 'react-redux';


export function StatisticCounter() {
    // state variables to display statistic if tha game
    const [wins, setWins] = useState(JSON.parse(localStorage.getItem("wins")) ?? 0)
    const [losts, setLosts] = useState(JSON.parse(localStorage.getItem("losts")) ?? 0)

    // event listener on local storage change => to update react state and render game statistics
    window.onstorage = () => {
        setWins(JSON.parse(localStorage.getItem("wins")));
        setLosts(JSON.parse(localStorage.getItem("losts")));
      };


    return (
    <div className='stat'>
        <p>Wins: {wins}</p>
        <p>Loses: {losts}</p>
    </div>
    );
}