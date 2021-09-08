#!/usr/bin/env node
import readlineSync from 'readline-sync';

import playGame, { checkQuestion, getRandomNumber } from '../cli.js';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => {
  const number = getRandomNumber();
  const answer = readlineSync.question(`Question: ${number}\n`);
  const correctResult = isEven(number) ? 'yes' : 'no';
  return checkQuestion(answer, correctResult);
};

playGame(3, 'Answer "yes" if the number is even, otherwise answer "no".', getQuestion);
