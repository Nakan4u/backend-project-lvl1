#!/usr/bin/env node
import playGame from '../index.js';
import { getQuestion } from '../games/brain-prime.js';

playGame(3, 'Answer "yes" if given number is prime. Otherwise answer "no".', getQuestion);
