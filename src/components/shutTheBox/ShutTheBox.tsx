/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { RemainingBlocksType } from '../../types';
import { isGameOver, removeBlocks, twoRandomDice } from '../../utils';
import DisplayDice from '../displayDice/DisplayDice';
// import { isGameOver } from '../../utils';
import DisplayNumbers from '../displayNumber/DisplayNumbers';
import RestartButton from '../restartButton/RestartButton';
import RollDice from '../rollDice/RollDice';
import YouWin from '../youWin/YouWin';
import initialGame from './gameHelpers';
import './ShutTheBox.scss';

export default function ShutTheBox(): JSX.Element {
  const [diceArray, setDiceArray] = useState<number[]>(twoRandomDice());
  const [remainingBlocks, setRemainingBlocks] = useState(initialGame);
  const [gameOver, setGameOver] = useState(false);
  const [rollDice, setRollDice] = useState(false);

  function handleRestart() {
    setGameOver(false);
    setDiceArray(twoRandomDice());
    setRemainingBlocks(initialGame);
  }

  const playedBlocks = remainingBlocks.reduce(
    (a: number, b: RemainingBlocksType): number => {
      if (b.isPlayed) return a + b.number;
      return a;
    },
    0
  );
  const diceSum = diceArray[0] + diceArray[1];

  useEffect(() => {
    if (playedBlocks > diceSum) {
      alert('invalid play');

      setRemainingBlocks(
        remainingBlocks.map((block: RemainingBlocksType) => ({
          ...block,
          isPlayed: false,
        }))
      );
    }
  }, [remainingBlocks]);

  useEffect(() => {
    const gameIsOver = isGameOver(
      remainingBlocks.map((b) => b.number),
      diceSum
    );
    console.log(
      remainingBlocks.map((b) => b.number),
      diceSum
    );

    console.log('is the game over?', gameIsOver);
  }, [diceArray]);

  if (diceSum === playedBlocks) {
    setRemainingBlocks(removeBlocks(remainingBlocks));
    setRollDice(true);
  }

  // to do
  /*
  1. work on end game logic => run it after dice are rolled - once it works, allow a user to reset a game
  3. block animation
  4. random dice on load
  5. test functions
  6. interfaces for all components types
  7. deploy on netlify
  */

  return (
    <>
      <header>
        <h1>Shut The Box</h1>
      </header>
      <main>
        <section>
          <h1>game Board</h1>
          <DisplayNumbers
            {...{ remainingBlocks, setRemainingBlocks, rollDice }}
          />
          {!remainingBlocks.length && <YouWin {...{ handleRestart }} />}
        </section>
        <section>
          <h3>
            <DisplayDice {...{ diceArray }} />
          </h3>
          {rollDice && <RollDice {...{ setRollDice, setDiceArray }} />}
          {gameOver && <RestartButton {...{ handleRestart }} />}
        </section>
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
