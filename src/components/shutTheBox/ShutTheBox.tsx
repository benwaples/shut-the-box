/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import DisplayNumbers from '../displayNumber/DisplayNumbers';

const initialGame = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ShutTheBox(): JSX.Element {
  const [diceSum, setDiceSum] = useState<number>();
  const [remainingNumbers, setRemainingNumbers] = useState<number[]>(
    initialGame
  );

  return (
    <>
      <header>
        <h1>Shut The Box</h1>
      </header>
      <main>
        <section>
          <h1>game Board</h1>
          <DisplayNumbers {...{ remainingNumbers, setRemainingNumbers }} />
        </section>
        <section>
          <h3>{diceSum}</h3>
          <button
            onClick={() => setDiceSum(Math.ceil(Math.random() * 6))}
            type="button"
          >
            Roll Dice
          </button>
        </section>
      </main>
      <footer>github: benwaples</footer>
    </>
  );
}
