import readlineSync from 'readline-sync';
import { getRandomNumber, checkQuestion } from '../index.js';

export const getProgression = (length = 10) => {
  const firstNumber = getRandomNumber(10);
  const step = getRandomNumber(10);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      result.push(firstNumber);
    } else {
      const prevNumber = result[i - 1];
      const nextNumber = prevNumber + step;
      result.push(nextNumber);
    }
  }
  return result;
};

export const getQuestion = () => {
  const progression = getProgression();
  const hidenNumberIndex = getRandomNumber(progression.length);
  const correctResult = progression[hidenNumberIndex];
  const progressionWithHidenNum = [...progression];
  progressionWithHidenNum[hidenNumberIndex] = '..';
  const answer = readlineSync.question(`Question: ${progressionWithHidenNum.join(' ')}\n`);

  return checkQuestion(+answer, correctResult);
};
