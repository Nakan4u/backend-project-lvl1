#!/usr/bin/env node
import playGame from '../index.js';
import { getQuestion } from '../games/brain-even.js';

playGame(3, 'Answer "yes" if the number is even, otherwise answer "no".', getQuestion);
