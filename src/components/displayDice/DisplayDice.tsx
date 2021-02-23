/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { twoRandomDice } from '../../utils';
import Dice from './Dice';

export interface DisplayDicePropTypes {
  diceArray: number[];
}

export default function DisplayDice({
  diceArray,
}: DisplayDicePropTypes): JSX.Element {
  const [animatedDice, setAnimatedDice] = useState<number[]>(twoRandomDice());

  useEffect(() => {
    const diceInterval = setInterval(() => {
      setAnimatedDice(twoRandomDice());
    }, 200);
    setTimeout(() => {
      clearInterval(diceInterval);
      setAnimatedDice([1, 1, 1]);
    }, 1400);
  }, [diceArray]);

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
