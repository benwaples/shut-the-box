import React from 'react';
import { removeNumber } from '../../utils';

export default function DisplayNumbers({
  remainingNumbers,
  setRemainingNumbers,
}: {
  remainingNumbers: number[];
  setRemainingNumbers: (numbers: number[]) => void;
}): JSX.Element {
  // change these to radio buttons in a form
  // undisable the button when a block has been clicked.
  // when dice button has been clicked, redisplay the blocks
  const numberBlockElements = remainingNumbers.map(
    (number: number): JSX.Element => (
      <>
        <label htmlFor={`${number}`}>{number}</label>
        <input
          id={`${number}`}
          value={`${number}`}
          name="block"
          onClick={() =>
            setRemainingNumbers(removeNumber(number, remainingNumbers))
          }
        />
      </>
    )
  );
  return <div>{numberBlockElements}</div>;
}
