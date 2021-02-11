import React from 'react';

function removeNumber(number: number, array: number[]): number[] {
  return array.filter((num: number) => num !== number);
}

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
