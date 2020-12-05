import { parseInput } from "../util";

const input = parseInput({ split: { mapper: false } });

const isPasswordValid = (policy: string, password: string): boolean => {
  const [letterCountString, policyLetter] = policy.split(" ");
  const [low, high] = letterCountString.split("-").map((num) => Number(num));

  let matchedLetters = 0;
  for (const letter of password.split("")) {
    if (letter === policyLetter) {
      matchedLetters++;
    }
  }

  return matchedLetters >= low && matchedLetters <= high;
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
