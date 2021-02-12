import React from 'react';
import { removeNumber } from '../../utils';

export default function DisplayNumbers({
  remainingNumbers,
  setRemainingNumbers,
}: {
  remainingNumbers: number[];
  setRemainingNumbers: (numbers: number[]) => void;
}): JSX.Element {
  const numberBlockElements = remainingNumbers.map((number: number) => (
    <li>
      <button
        key={number}
        onClick={() =>
          setRemainingNumbers(removeNumber(number, remainingNumbers))
        }
        type="button"
      >
        {number}
      </button>
    </li>
  ));
  return <ul>{numberBlockElements}</ul>;
}
