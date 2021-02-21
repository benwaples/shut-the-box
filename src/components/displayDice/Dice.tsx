import React from 'react';
import './DisplayDice.scss';

interface DieTypes {
  diceArray: number[];
}

export default function Dice({ diceArray }: DieTypes): JSX.Element {
  const displayDice = diceArray.map((dice: number) => {
    return (
      <div className={`dice face-${dice}`} key={Math.random()}>
        {[...Array(dice)].map(() => (
          <span className="dot" key={Math.random()} />
        ))}
      </div>
    );
  });

  return <>{displayDice}</>;
}
