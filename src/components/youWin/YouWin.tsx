import React from 'react';
import winGifs from './assets';
import './YouWin.scss';

export interface YouWinPropTypes {
  handleRestart: () => void;
}

export default function YouWin({
  handleRestart,
}: YouWinPropTypes): JSX.Element {
  const randomIndex = Math.floor(Math.random() * winGifs.length);
  const winningSrc = winGifs[randomIndex];
  return (
    <div id="you-win">
      <img src={winningSrc} alt="YOU WON" />
      <button type="button" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}
