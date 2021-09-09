import readlineSync from 'readline-sync';
import { checkQuestion, getRandomNumber } from '../index.js';

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const getQuestion = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const answer = readlineSync.question(`Question: ${number1} ${number2}\n`);
  const correctResult = gcd(number1, number2);

  return checkQuestion(+answer, correctResult);
};
