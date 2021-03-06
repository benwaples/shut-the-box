import { RemainingBlocksType } from './types';

export function removeBlocks(
  array: RemainingBlocksType[]
): RemainingBlocksType[] {
  return array.filter(({ isPlayed }: RemainingBlocksType) => !isPlayed);
}

export function playBlock(
  blockList: RemainingBlocksType[],
  n: number
): RemainingBlocksType[] {
  const copyArray = blockList.slice();
  const block = copyArray.find(
    ({ number }: RemainingBlocksType) => number === n
  );
  // if block exists then toggle it to true.. this is more for TS lol
  if (block) {
    block.isPlayed = true;
  }
  return copyArray;
}

export function unPlayBlock(
  blockList: RemainingBlocksType[],
  n: number
): RemainingBlocksType[] {
  const copyArray = blockList.slice();
  const block = copyArray.find(
    ({ number }: RemainingBlocksType) => number === n
  );

  if (block) {
    block.isPlayed = false;
  }

  return copyArray;
}

export function isGameOver(
  numbers: number[],
  target: number,
  partial?: number[]
): boolean {
  let n;
  let remaining;

  // eslint-disable-next-line no-param-reassign
  if (!partial) partial = [];

  if (numbers.includes(target)) return false;

  // sum partial
  const s = partial.reduce((a, b) => {
    return a + b;
  }, 0);

  // check if the partial sum is equals to target
  if (s === target) {
    return false;
  }

  if (s >= target) {
    return false; // if we reach the number why bother to continue
  }

  for (let i = 0; i < numbers.length; i += 1) {
    n = numbers[i];
    remaining = numbers.slice();
    numbers.slice(i + 1);
    isGameOver(remaining, target, partial.concat([n]));
  }

  return true;
}

export function twoRandomDice(): number[] {
  return [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
}
