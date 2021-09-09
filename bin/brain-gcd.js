#!/usr/bin/env node
import playGame from '../index.js';
import { getQuestion } from '../games/brain-gcd.js';

playGame(3, 'Find the greatest common divisor of given numbers.', getQuestion);
