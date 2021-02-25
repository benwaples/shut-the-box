import React from 'react';
import { RemainingBlocksType } from '../../types';
import { playBlock, unPlayBlock } from '../../utils';
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

  function blockPlay(isPlayed: boolean, number: number) {
    if (isPlayed) {
      setRemainingBlocks(unPlayBlock(remainingBlocks, number));
    } else {
      setRemainingBlocks(playBlock(remainingBlocks, number));
    }
  }

  const blockElements = remainingBlocks.map(
    ({ number, isPlayed }: RemainingBlocksType) => (
      <div
        key={number}
        className={isPlayed ? 'played-block block' : 'default block'}
      >
        <button
          disabled={rollDice}
          onClick={() => blockPlay(isPlayed, number)}
          type="button"
        >
          {number}
        </button>
      </div>
    )
  );

  return <div id="block-display">{blockElements}</div>;
}
