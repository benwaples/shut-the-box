import { removeBlocks } from '../utils';

export {};

describe('util functions', () => {
  it('removeBlocks(array: RemainingBlocks[])', () => {
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

    const expected = exampleData.slice().splice(0, 3);
    const actual = removeBlocks(exampleData);

    expect(actual).toEqual(expected);
  });
});
