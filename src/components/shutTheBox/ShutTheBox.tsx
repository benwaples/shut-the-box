/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { RemainingBlocksType } from '../../types';
import { isGameOver, removeBlocks } from '../../utils';
// import { isGameOver } from '../../utils';
import DisplayNumbers from '../displayNumber/DisplayNumbers';
import RestartButton from '../reestartButton/RestartButton';
import RollDice from '../rollDice/RollDice';
import initialGame from './gameHelpers';

export default function ShutTheBox(): JSX.Element {
  const [diceArray, setDiceArray] = useState<number[]>([1, 1]);
  const [remainingBlocks, setRemainingBlocks] = useState(initialGame);
  const [gameOver, setGameOver] = useState(false);
  const [rollDice, setRollDice] = useState(false);

  function handleRestart() {
    setGameOver(false);
    setDiceArray([1, 1]);
    setRemainingBlocks(initialGame);
  }

  useEffect(() => {}, [remainingBlocks]);
  const playedBlocks = remainingBlocks.reduce(
    (a: number, b: RemainingBlocksType): number => {
      if (b.isPlayed) return a + b.number;
      return a;
    },
    0
  );
  const diceSum = diceArray[0] + diceArray[1];

  if (diceSum === playedBlocks) {
    setRemainingBlocks(removeBlocks(remainingBlocks));
    setRollDice(true);
  }
  // const gameIsOver = isGameOver(
  //   remainingBlocks.map((b) => b.number),
  //   diceSum
  // );

  // to do
  /*
  1. make roll dice button and pass it the correct props
      run start and see if current changes will work then ACP
  2. work on end game logic
  3. check to see if a play is valid
  4. make a played-block and default block class
  */

  return (
    <>
      <header>
        <h1>Shut The Box</h1>
      </header>
      <main>
        <section>
          <h1>game Board</h1>
          <DisplayNumbers {...{ remainingBlocks, setRemainingBlocks }} />
        </section>
        <section>
          <h3>
            {diceArray[0]}, {diceArray[1]}
          </h3>
          {rollDice && <RollDice {...{ setRollDice, setDiceArray }} />}
          {gameOver && <RestartButton {...{ handleRestart }} />}
        </section>
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
