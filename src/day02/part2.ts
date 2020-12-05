import { parseInput } from "../util";

const input = parseInput({ split: { mapper: false } });

const isPasswordValid = (policy: string, password: string): boolean => {
  const [letterCountString, policyLetter] = policy.split(" ");
  const [index1, index2] = letterCountString
    .split("-")
    .map((num) => Number(num));

  // Check if the indexes are within range
  if (index1 > password.length || index2 > password.length) return false;

  const letters = password.split("");

  let matchingLetters = 0;
  if (letters[index1 - 1] === policyLetter) {
    matchingLetters++;
  }

  if (letters[index2 - 1] === policyLetter) {
    matchingLetters++;
  }

  return matchingLetters === 1;
};

const validatePasswords = (): number => {
  let validPasswords = 0;
  for (const p of input) {
    const [policy, password] = p.split(": ");
    if (policy && password) {
      if (isPasswordValid(policy, password)) {
        validPasswords++;
      }
    }
  }
  return validPasswords;
};

export default validatePasswords();
