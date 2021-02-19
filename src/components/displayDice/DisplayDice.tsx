/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import './DisplayDice.scss';

export default function DisplayDice({
  diceArray,
}: {
  diceArray: number[];
}): JSX.Element {
  // animation
  /*
  1. state for animatedDice
  2. make interval to update animatedDice
  3. kill interval after X time and display diceArray
  */
  const displayDice = diceArray.map((dice: number) => {
    return (
      <div className={`dice face-${dice}`}>
        {[...Array(dice)].map(() => (
          <span className="dot" />
        ))}
      </div>
    );
  });
  return <div id="dice-container">{displayDice}</div>;
}
