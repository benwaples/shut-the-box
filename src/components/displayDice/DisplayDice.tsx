/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import './DisplayDice.scss';

export default function DisplayDice({
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
  return <>{displayDice}</>;
}
