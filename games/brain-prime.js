import readlineSync from 'readline-sync';
import { checkQuestion, getRandomNumber } from '../index.js';

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const getQuestion = () => {
  const number = getRandomNumber();
  const answer = readlineSync.question(`Question: ${number}\n`);
  const correctResult = isPrime(number) ? 'yes' : 'no';

  return checkQuestion(answer, correctResult);
};
