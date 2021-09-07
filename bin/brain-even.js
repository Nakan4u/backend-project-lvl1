#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getQuestionResult = () => {
  const number = getRandomNumber();
  const answer = readlineSync.question(`Question: ${number}\n`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const result = answer === correctAnswer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return result;
};

const playEvenGame = (questions = 3) => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let count = 1; count <= questions; count += 1) {
    const result = getQuestionResult();
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (count === questions) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

playEvenGame();
