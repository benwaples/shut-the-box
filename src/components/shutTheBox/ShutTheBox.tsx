/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import DisplayNumbers from '../displayNumber/DisplayNumbers';

const initialGame = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ShutTheBox(): JSX.Element {
  const [diceArray, setDiceArray] = useState<number[]>([1, 1]);
  const [remainingNumbers, setRemainingNumbers] = useState<number[]>(
    initialGame
  );

  function handleRestart() {
    setDiceArray([1, 1]);
    setRemainingNumbers(initialGame);
  }

  if (!remainingNumbers.includes(diceArray[0] + diceArray[1])) {
    return <h1>You lose</h1>;
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
