import React from 'react';
import './DisplayDice.scss';

interface DieTypes {
  diceArray: number[];
}

export default function Dice({ diceArray }: DieTypes): JSX.Element {
  const displayDice = diceArray.map((dice: number) => {
    return (
      <div className={`dice face-${dice}`}>
        {[...Array(dice)].map(() => (
          <span className="dot" />
        ))}
      </div>
    );
  });

  return <>{displayDice}</>;
}
