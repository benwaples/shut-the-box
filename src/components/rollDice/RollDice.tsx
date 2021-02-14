import React from 'react';

interface RollDicePropTypes {
  setRollDice: (tF: boolean) => void;
  setDiceArray: (numbers: number[]) => void;
}

export default function RollDice({
  setRollDice,
  setDiceArray,
}: RollDicePropTypes): JSX.Element {
  return (
    <button
      onClick={() => {
        setRollDice(false);
        setDiceArray([
          Math.ceil(Math.random() * 6),
          Math.ceil(Math.random() * 6),
        ]);
      }}
      type="button"
    >
      Roll Dice
    </button>
  );
}
