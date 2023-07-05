import store from '../reducers';

import { GameState, setGameState } from '../reducers/GameState';
import { updateBoard } from './BoardLogic';
import {
	isSnakeOutOfBounds,
	isSnakeOnSelf,
	isSnakeOnFood,
	handleSnakeAte,
	updateSnakePosition,
} from './SnakeLogic';

export function update() {
	const state = store.getState();
	const direction = state.Direction.direction;

	// Check if snake head hit wall
	if (isSnakeOutOfBounds()) {
		handleGameOver();
		return;
	}
	// Check if snake ate itself
	if (isSnakeOnSelf()) {
		handleGameOver();
		return;
	}
	// Check if snake ate food
	if (isSnakeOnFood()) {
		handleSnakeAte(direction);
		return;
	}
	// Update snakes position based on next positions
	updateSnakePosition();

	// Update the BoardData state so we can see the snake on the board
	updateBoard();
}

function handleGameOver() {
	const state = store.getState();
	const intervalId = state.GameState.intervalId;
	// Disable the interval (update)
	clearInterval(intervalId);
	// Change the game state
	store.dispatch(setGameState(GameState.MENU));
}
