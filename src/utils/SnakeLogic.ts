// Any logic for snake goes here. Eating, moving, updating
import store from '../reducers';

import { isArraysEqual } from './Utilities';
import { moveSnakeOnUpdate, growSnake } from '../reducers/Snake';
import { BOARD_SIZE } from '../reducers/BoardData';
import { setFoodCoordinates } from '../reducers/Food';
import { getNewFoodCoords } from './FoodLogic';
import { updateBoard } from './BoardLogic';
import { Direction } from '../reducers/Direction';

export function isSnakeOnFood() {
	const state = store.getState();
	const foodCoordinates = state.Food.coordinates;
	const nextSnakeHeadCoordinates = state.Snake.snake[0].next;

	if (isArraysEqual(foodCoordinates, nextSnakeHeadCoordinates)) return true;
	else return false;
}

export function updateSnakePosition() {
	const state = store.getState();
	const direction = state.Direction.direction;

	store.dispatch(moveSnakeOnUpdate({ direction: direction }));
}

export function isSnakeOnSelf(): boolean {
	const state = store.getState();
	const snake = state.Snake.snake;
	const nextHeadCoords = snake[0].next;

	let isSnakeOnSelf = false;

	for (let i = 1; i < snake.length; i++) {
		if (isArraysEqual(snake[i].current, nextHeadCoords)) isSnakeOnSelf = true;
	}

	return isSnakeOnSelf;
}

export function isSnakeOutOfBounds(): boolean {
	const state = store.getState();
	const snakeHead = state.Snake.snake[0];
	const [x, y] = snakeHead.next;

	let isOutOfBounds = false;
	if (x < 0 || y < 0 || x > BOARD_SIZE - 1 || y > BOARD_SIZE - 1)
		isOutOfBounds = true;

	return isOutOfBounds;
}

export function handleSnakeAte(direction: Direction) {
	// Grow the snake by 1
	store.dispatch(growSnake({ direction }));
	// Get new food
	const coords = getNewFoodCoords();
	store.dispatch(setFoodCoordinates(coords));
	// Clear the board and display again with new snake and new food
	updateBoard();
}

export function getNextHeadCoordinates(
	direction: Direction,
	currentCoordinates: [number, number]
): [number, number] {
	let [x, y] = currentCoordinates;
	if (direction === Direction.NORTH) y -= 1;
	else if (direction === Direction.SOUTH) y += 1;
	else if (direction === Direction.WEST) x -= 1;
	else if (direction === Direction.EAST) x += 1;
	return [x, y];
}
