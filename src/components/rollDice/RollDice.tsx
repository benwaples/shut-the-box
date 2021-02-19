import React from 'react';
import { twoRandomDice } from '../../utils';
import './RollDice.scss';

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
        setDiceArray(twoRandomDice());
      }}
      type="button"
    >
      Roll Dice
    </button>
  );
}
