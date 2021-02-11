/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import DisplayNumbers from '../displayNumber/DisplayNumbers';

const initialGame = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ShutTheBox(): JSX.Element {
  const [diceSum, setDiceSum] = useState<number[]>([0, 0]);
  const [remainingNumbers, setRemainingNumbers] = useState<number[]>(
    initialGame
  );

  function handleRestart() {
    setDiceSum([1, 1]);
    setRemainingNumbers(initialGame);
  }
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
          <h3>
            {diceSum[0]}, {diceSum[1]}
          </h3>
          <button
            onClick={() =>
              setDiceSum([
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
