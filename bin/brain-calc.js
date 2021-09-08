#!/usr/bin/env node
import playGame from '../index.js';
import { getQuestion } from '../games/brain-calc.js';

playGame(3, 'What is the result of the expression?', getQuestion);
