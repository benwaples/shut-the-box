import React from 'react';
import winGifs from './assets';
import './YouWin.scss';

export default function YouWin(): JSX.Element {
  const randomIndex = Math.floor(Math.random() * winGifs.length);
  const winningSrc = winGifs[randomIndex];
  return (
    <div id="you-win">
      <img src={winningSrc} alt="YOU WON" />
      <button type="button">Restart Game</button>
    </div>
  );
}
