/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { twoRandomDice } from '../../utils';
import './DisplayDice.scss';

export default function DisplayDice({
  diceArray,
}: {
  diceArray: number[];
}): JSX.Element {
  const [animatedDice, setAnimatedDice] = useState<number[]>(twoRandomDice());
  // animation
  /*
  1. state for animatedDice
  2. make interval to update animatedDice
  3. kill interval after X time and display diceArray
  */
  const diceInterval = setInterval(() => {
    setAnimatedDice(twoRandomDice());
  }, 100);
  setTimeout(() => {
    clearInterval(diceInterval);
    setAnimatedDice([1, 1, 1]);
  }, 1000);

  const displayDice = diceArray.map((dice: number) => {
    return (
      <div className={`dice face-${dice}`}>
        {[...Array(dice)].map(() => (
          <span className="dot" />
        ))}
      </div>
    );
  });
  return <div id="dice-container">{displayDice}</div>;
}
