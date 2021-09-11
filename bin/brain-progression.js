#!/usr/bin/env node
import playGame from '../index.js';
import { getQuestion } from '../games/brain-progression.js';

playGame(3, 'What number is missing in the progression?', getQuestion);
