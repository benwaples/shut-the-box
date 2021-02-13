/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import { isGameOver } from '../../utils';
import DisplayNumbers from '../displayNumber/DisplayNumbers';
import initialGame from './gameHelpers';

export default function ShutTheBox(): JSX.Element {
  const [diceArray, setDiceArray] = useState<number[]>([1, 1]);
  const [remainingBlocks, setRemainingBlocks] = useState(initialGame);

  function handleRestart() {
    setDiceArray([1, 1]);
    setRemainingBlocks(initialGame);
  }

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
          <button
            onClick={() =>
              setDiceArray([
                Math.ceil(Math.random() * 6),
                Math.ceil(Math.random() * 6),
              ])
            }
            type="button"
          >
            Roll Dice
          </button>
          <button type="button" onClick={handleRestart}>
            Restart
          </button>
        </section>
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
