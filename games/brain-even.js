import readlineSync from 'readline-sync';
import { checkQuestion, getRandomNumber } from '../index.js';

export const isEven = (number) => number % 2 === 0;

export const getQuestion = () => {
  const number = getRandomNumber();
  const answer = readlineSync.question(`Question: ${number}\n`);
  const correctResult = isEven(number) ? 'yes' : 'no';
  return checkQuestion(answer, correctResult);
};
