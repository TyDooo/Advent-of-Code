import { parseInput } from "../util";

const input = parseInput({ split: { mapper: false } }).filter(
  (row) => row.length > 0
);

const replaceAt = (
  index: number,
  replacement: string,
  original: string
): string => {
  return (
    original.substr(0, index) +
    replacement +
    original.substr(index + replacement.length)
  );
};

const isTree = (index: number, row: string): boolean => {
  const rowWidth = row.length;

  if (index > rowWidth) index %= rowWidth;
  const isTree = row.split("")[index] === "#";

  return isTree;
};

const calculateTrees = (right: number, down: number = 1): number => {
  let trees = 0;
  let currentXIndex = 0;

  for (let i = 0; i < input.length; i += down) {
    const row = input[i];
    console.log(row);
    if (isTree(currentXIndex, row)) {
      trees++;
    }

    currentXIndex += right;
  }

  return trees;
};

export default calculateTrees(1) *
  calculateTrees(3) *
  calculateTrees(5) *
  calculateTrees(7) *
  calculateTrees(1, 2);
