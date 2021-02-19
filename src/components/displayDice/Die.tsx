import React from 'react';

export default function Die({
  diceArray,
}: {
  diceArray: number[];
}): JSX.Element {
  const displayDice = diceArray.map((dice: number) => {
    return (
      <div className={`dice face-${dice}`}>
        {[...Array(dice)].map(() => (
          <span className="dot" />
        ))}
      </div>
    );
  });

  return displayDice;
}
