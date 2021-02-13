export function removeNumber(number: number, array: number[]): number[] {
  return array.filter((num: number) => num !== number);
}

// export function isGameOver(
//   diceArray: number[],
//   remainingNumbers: number[]
// ): boolean {
//   const diceSum = diceArray[0] + diceArray[1];
//   const gameIsOver = false;

//   for (let i = 0; i < remainingNumbers.length - 1; i += 1) {
//     const sum = i + remainingNumbers[i + 1];
//   }
//   return gameIsOver;
// }

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

  for (let i = 0; i < numbers.length; i += 1) {
    n = numbers[i];
    remaining = numbers.slice(i + 1);
    isGameOver(remaining, target, partial.concat([n]));
  }

  return true;
}
