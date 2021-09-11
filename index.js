import readlineSync from 'readline-sync';

export const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkQuestion = (answer, correctResult) => {
  const result = answer === correctResult;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
  }
  return result;
};

export default (questions = 3, description = '', getQuestion) => {
  const userName = sayHello();

  if (description.length) {
    console.log(description);
  }

  for (let count = 1; count <= questions; count += 1) {
    const result = getQuestion();
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (count === questions) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
