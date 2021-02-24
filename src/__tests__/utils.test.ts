import { playBlock, removeBlocks } from '../utils';

const exampleData = [
  {
    number: 1,
    isPlayed: false,
  },
  {
    number: 2,
    isPlayed: false,
  },
  {
    number: 3,
    isPlayed: false,
  },
  {
    number: 4,
    isPlayed: true,
  },
];
describe('util functions', () => {
  it('removeBlocks(array: RemainingBlocks[])', () => {
    const expected = exampleData.slice().splice(0, 3);
    const actual = removeBlocks(exampleData);

    expect(actual).toEqual(expected);
  });

  it('playBlocks(blockList, number)', () => {
    const expected = exampleData.slice();
    // make all blocks unplayed
    expected[3].isPlayed = false;
    console.log(expected);

    // make block 4 played
    const actual = playBlock(exampleData, 3);

    console.log(actual);

    expect(actual).toEqual(exampleData);
  });
});
