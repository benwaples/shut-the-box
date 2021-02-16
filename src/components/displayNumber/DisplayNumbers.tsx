import React from 'react';
import { RemainingBlocksType } from '../../types';
import { playBlock } from '../../utils';
import './DisplayNumbers.scss';

export default function DisplayNumbers({
  remainingBlocks,
  setRemainingBlocks,
  rollDice,
}: {
  remainingBlocks: RemainingBlocksType[];
  setRemainingBlocks: (blocks: RemainingBlocksType[]) => void;
  rollDice: boolean;
}): JSX.Element {
  // map over remainingBlocks and make block elements :)

  const blockElements = remainingBlocks.map(
    ({ number, isPlayed }: RemainingBlocksType) => (
      <div key={number} className={isPlayed ? 'played-block' : 'default'}>
        <button
          disabled={rollDice}
          onClick={() => setRemainingBlocks(playBlock(remainingBlocks, number))}
          type="button"
        >
          {number}
        </button>
      </div>
    )
  );

  return <div id="block-display">{blockElements}</div>;
}
