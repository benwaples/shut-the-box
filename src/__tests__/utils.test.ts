import { removeBlocks } from '../utils';

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

  it('playBlocks(blockList, number)', () => {});
});
