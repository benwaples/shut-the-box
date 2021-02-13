/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { RemainingBlocksType } from '../../types';
import { isGameOver, removeBlocks } from '../../utils';
// import { isGameOver } from '../../utils';
import DisplayNumbers from '../displayNumber/DisplayNumbers';
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

  // useEffect that rerenders when ever remainingBlocks is changed
  useEffect(() => {}, [remainingBlocks]);
  // check if playedBlocks adds to the sum of dice array
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

  //    if yes, cut out those numbers from teh remainingBlocks array

  //        let player roll again via terinary in JSX
  //        and check if the game is over then

  const gameIsOver = isGameOver(
    remainingBlocks.map((b) => b.number),
    diceSum
  );

  console.log(gameIsOver, 'gameIsOver');
  //    if played block is over dice amount say invalid play
  //        then update Remaining blocks and change that last block to false
  //        if game is over update state and display play again on the screen
  //    if no, the player needs to put another block down;
  // console.log(remainingBlocks);
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
          {rollDice && (
            <button
              onClick={() => {
                setRollDice(false);
                setDiceArray([
                  Math.ceil(Math.random() * 6),
                  Math.ceil(Math.random() * 6),
                ]);
              }}
              type="button"
            >
              Roll Dice
            </button>
          )}
          {gameOver && (
            <button type="button" onClick={handleRestart}>
              Restart
            </button>
          )}
        </section>
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
