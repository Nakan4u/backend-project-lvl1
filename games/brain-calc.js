import readlineSync from 'readline-sync';
import { checkQuestion, getRandomNumber } from '../index.js';

export const calcTwoNumbers = (num1, num2, operator = '*') => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

export const getRandomOperator = () => {
  const availableOperators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(3);
  return availableOperators[operatorIndex];
};

export const getQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = readlineSync.question(`Question: ${number1} ${operator} ${number2}\n`);
  const correctResult = calcTwoNumbers(number1, number2, operator);
  return checkQuestion(+answer, correctResult);
};
