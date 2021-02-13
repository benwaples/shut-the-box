import React from 'react';
import { RemainingBlocksType } from '../../types';
import { playBlock } from '../../utils';

export default function DisplayNumbers({
  remainingBlocks,
  setRemainingBlocks,
}: {
  remainingBlocks: RemainingBlocksType[];
  setRemainingBlocks: (blocks: RemainingBlocksType[]) => void;
}): JSX.Element {
  // map over remainingBlocks and make block elements :)
  const blockElements = remainingBlocks.map(
    ({ number, isPlayed }: RemainingBlocksType) => (
      <div key={number} className={isPlayed ? 'played-block' : 'default'}>
        <button
          onClick={() => setRemainingBlocks(playBlock(remainingBlocks, number))}
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
