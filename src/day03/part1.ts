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

  let rowWithMarker;
  if (isTree) {
    rowWithMarker = replaceAt(index, "X", row);
  } else {
    rowWithMarker = replaceAt(index, "O", row);
  }

  console.log(rowWithMarker);

  return isTree;
};

const calculateTrees = (): number => {
  let trees = 0;
  let currentIndex = 0;
  for (const row of input) {
    if (isTree(currentIndex, row)) {
      trees++;
    }

    currentIndex += 3;
  }

  return trees;
};

export default calculateTrees();
