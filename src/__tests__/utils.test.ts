import { playBlock, removeBlocks, unPlayBlock } from '../utils';

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
    const exampleDataCopy = exampleData.slice();
    const expected = true;

    // make block 4 played
    const actual = playBlock(exampleDataCopy, 2);

    expect(actual[1].isPlayed).toEqual(expected);
  });

  it('unPlayBlock(blockList, n)', () => {
    const exampleDataCopy = exampleData.slice();
    const expected = false;

    const actual = unPlayBlock(exampleDataCopy, 4);

    expect(actual[3].isPlayed).toEqual(expected);
  });
});
