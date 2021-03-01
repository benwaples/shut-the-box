/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { invalidPlayToast, playedBlocksToast } from './gameUtils';
import 'react-toastify/dist/ReactToastify.css';
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
import Instructions from '../instructions/Instructions';

export default function ShutTheBox(): JSX.Element {
  const [diceArray, setDiceArray] = useState<number[]>(twoRandomDice());
  const [remainingBlocks, setRemainingBlocks] = useState(initialGame);
  const [gameOver, setGameOver] = useState(false);
  const [rollDice, setRollDice] = useState(true);
  const [displayInstructions, setDisplayInstructions] = useState(true);

  const playedBlocks = remainingBlocks.reduce(
    (a: number, b: RemainingBlocksType): number => {
      if (b.isPlayed) return a + b.number;
      return a;
    },
    0
  );
  const diceSum = diceArray[0] + diceArray[1];

  function handleRestart() {
    setRemainingBlocks(
      initialGame.map((block: RemainingBlocksType) => ({
        ...block,
        isPlayed: false,
      }))
    );
    setDiceArray(twoRandomDice());
    setGameOver(false);
  }

  // handleRestart(setRemainingBlocks, setDiceArray, setGameOver)
  useEffect(() => {
    if (playedBlocks > diceSum) {
      invalidPlayToast();
      setRemainingBlocks(
        remainingBlocks.map((block: RemainingBlocksType) => ({
          ...block,
          isPlayed: false,
        }))
      );
    }

    if (diceSum === playedBlocks) {
      // get the blocks user is playing
      const blocksPlayed = remainingBlocks.reduce(
        (a: number[], b: RemainingBlocksType): number[] => {
          if (b.isPlayed) a.push(b.number);
          return a;
        },
        []
      );
      playedBlocksToast(blocksPlayed);
      setRemainingBlocks(removeBlocks(remainingBlocks));
      setRollDice(true);
    }
  }, [remainingBlocks]);

  useEffect(() => {
    const gameIsOver = isGameOver(
      remainingBlocks.map((b) => b.number),
      diceSum
    );

    console.log('is the game over?', gameIsOver);
  }, [diceArray]);

  // run if the play is valid

  // to do
  /*
  1. work on end game logic => run it after dice are rolled - once it works, allow a user to reset a game
  2. block animation
  */

  return (
    <>
      <header>
        <h1>Shut The Box</h1>
      </header>
      <ToastContainer />
      <main>
        {displayInstructions && (
          <Instructions {...{ setDisplayInstructions, displayInstructions }} />
        )}
        <section id="game-board">
          <DisplayNumbers
            {...{ remainingBlocks, setRemainingBlocks, rollDice }}
          />
          {!remainingBlocks.length && <YouWin {...{ handleRestart }} />}
        </section>
        <section className="dice-handler">
          {rollDice ? (
            <RollDice {...{ setRollDice, setDiceArray }} />
          ) : (
            <DisplayDice {...{ diceArray }} />
          )}
          {gameOver && <RestartButton {...{ handleRestart }} />}
        </section>
        <RestartButton {...{ handleRestart }} />
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
