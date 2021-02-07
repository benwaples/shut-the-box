import React, { useState } from 'react';

export default function ShutTheBox(): JSX.Element {
  const [diceSum, setDiceSum] = useState<number>();
  return (
    <>
      <header>
        <h1>Shut The Box</h1>
      </header>
      <main>
        <section>game Board</section>
        <section>
          <h3>{diceSum}</h3>
          <button
            onClick={() => setDiceSum(Math.floor(Math.random() * 100))}
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
