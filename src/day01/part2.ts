import { parseInput } from "../util";

const input = parseInput();

const find2020 = (): number[] => {
  for (const number of input) {
    for (const number1 of input) {
      for (const number2 of input) {
        if (
          number !== 0 &&
          number1 !== 0 &&
          number2 !== 0 &&
          number + number1 + number2 === 2020
        ) {
          return [number, number1, number2];
        }
      }
    }
  }

  return [0, 0, 0];
};

const [num1, num2, num3] = find2020();

export default num1 * num2 * num3;
