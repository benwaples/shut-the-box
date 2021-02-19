import React from 'react';

interface DieTypes {
  diceArray: number[];
}

export default function Die({ diceArray }: DieTypes): JSX.Element {
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
