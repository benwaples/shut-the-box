/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { twoRandomDice } from '../../utils';
import Dice from './Dice';

export default function DisplayDice({
  diceArray,
}: {
  diceArray: number[];
}): JSX.Element {
  const [animatedDice, setAnimatedDice] = useState<number[]>(twoRandomDice());

  useEffect(() => {
    const diceInterval = setInterval(() => {
      setAnimatedDice(twoRandomDice());
    }, 100);
    setTimeout(() => {
      clearInterval(diceInterval);
      setAnimatedDice([1, 1, 1]);
    }, 1000);
  }, []);

  return (
    <div id="dice-container">
      {animatedDice.length === 2 ? (
        <Dice {...{ diceArray: animatedDice }} />
      ) : (
        <Dice {...{ diceArray }} />
      )}
    </div>
  );
}
