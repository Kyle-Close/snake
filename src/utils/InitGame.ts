import store from '../reducers';

import { addSnakeBodySegment, initSnakeHead } from '../reducers/Snake';
import { setSquare, SquareState } from '../reducers/BoardData';
import { Direction } from '../reducers/Direction';
import { GameState, setGameState, setIntervalId } from '../reducers/GameState';
import { update } from './OnUpdate';

export function setupSnake(
	headCoordinates: [number, number],
	bodyCoordinates: [number, number][]
) {
	const state = store.getState();
	const direction = state.Direction.direction;

	store.dispatch(
		initSnakeHead({
			direction,
			headCoordinates,
		})
	);

	store.dispatch(addSnakeBodySegment({ bodyCoordinates: bodyCoordinates[0] }));
	store.dispatch(addSnakeBodySegment({ bodyCoordinates: bodyCoordinates[1] }));
}

export function setHeadStartingSquare(gridSize: number) {
	const center = Math.floor(gridSize / 2);

	store.dispatch(
		setSquare({
			state: SquareState.HEAD,
			coordinates: [center, center],
		})
	);
	return [center, center];
}

export function setInitialSnakeBodySquares(
	headCoordinates: [number, number],
	direction: Direction
): [number, number][] {
	const [x, y] = headCoordinates;
	const snakeBody: [number, number][] = [];

	switch (direction) {
		case Direction.NORTH:
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x, y + 1],
				})
			);

			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x, y + 2],
				})
			);

			snakeBody.push([x, y + 1]); // Push first segment coords to array
			snakeBody.push([x, y + 2]); // Push second segment coords to array

			break;
		case Direction.SOUTH:
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x, y - 1],
				})
			);
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x, y - 2],
				})
			);

			snakeBody.push([x, y - 1]); // Push first segment coords to array
			snakeBody.push([x, y - 2]); // Push second segment coords to array

			break;
		case Direction.WEST:
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x + 1, y],
				})
			);
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x + 2, y],
				})
			);

			snakeBody.push([x + 1, y]); // Push first segment coords to array
			snakeBody.push([x + 2, y]); // Push second segment coords to array

			break;
		case Direction.EAST:
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x - 1, y],
				})
			);
			store.dispatch(
				setSquare({
					state: SquareState.BODY,
					coordinates: [x - 2, y],
				})
			);

			snakeBody.push([x - 1, y]); // Push first segment coords to array
			snakeBody.push([x - 2, y]); // Push second segment coords to array

			break;
	}
	return snakeBody;
}

export function handleStartGame() {
	const squaresArray = store.getState().BoardData.squaresArray;
	const direction = store.getState().Direction.direction;

	const [x, y] = setHeadStartingSquare(squaresArray.length);
	const snakeBody = setInitialSnakeBodySquares([x, y], direction);

	setupSnake([x, y], snakeBody);

	store.dispatch(setGameState(GameState.PLAYING));
	store.dispatch(setIntervalId(window.setInterval(update, 230)));
}
