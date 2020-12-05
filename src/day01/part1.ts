import { parseInput } from "../util";

const input = parseInput();

const find2020 = (): number[] => {
  for (const number of input) {
    for (const number1 of input) {
      if (number + number1 === 2020) {
        return [number, number1];
      }
    }
  }

  return [0, 0, 0];
};

const [num1, num2] = find2020();

export default num1 * num2;
