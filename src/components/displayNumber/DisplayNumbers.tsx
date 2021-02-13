import React from 'react';
import { RemainingBlocksType } from '../../types';
import { playBlock, removeNumber } from '../../utils';

export default function DisplayNumbers({
  remainingBlocks,
}: // setRemainingBlocks,
{
  remainingBlocks: RemainingBlocksType[];
  // setRemainingBlocks: (numbers: number[]) => void;
}): JSX.Element {
  // map over remainingBlocks and make block elements :)
  const blockElements = remainingBlocks.map(
    ({ number, isPlayed }: RemainingBlocksType) => (
      <div className={isPlayed ? 'played-block' : 'default'}>
        <button
          onClick={() => playBlock(remainingBlocks, number)}
          type="button"
        >
          {number}
        </button>
      </div>
    )
  );

  // check to see if game is over
  // check to see if player needs to roll again
  // if neither then let them click another block

  return <div>{blockElements}</div>;
}
