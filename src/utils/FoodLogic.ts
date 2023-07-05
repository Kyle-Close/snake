import store from '../reducers';

import { BOARD_SIZE } from '../reducers/BoardData';
import { isArraysEqual } from './Utilities';

export function getNewFoodCoords(): [number, number] {
	// Get array of available spaces
	const availableSquares = getAvailableFoodSquares();
	// Randomly select from array
	const randomIndex = Math.floor(Math.random() * availableSquares.length);
	return availableSquares[randomIndex];
}

function getAvailableFoodSquares() {
	const state = store.getState();
	const snake = state.Snake.snake;

	const allSquares: [number, number][] = [];

	for (let i = 0; i < BOARD_SIZE; i++) {
		for (let j = 0; j < BOARD_SIZE; j++) {
			allSquares.push([i, j]);
		}
	}

	const availableSquares: [number, number][] = [];

	allSquares.forEach((coordinate) => {
		if (!snake.some((segment) => isArraysEqual(segment.current, coordinate))) {
			availableSquares.push(coordinate);
		}
	});

	return availableSquares;
}
