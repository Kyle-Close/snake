import store from '../reducers';

import { setSquare, SquareState } from '../reducers/BoardData';
import { Direction, setDirection } from '../reducers/Direction';

import { addSnakeBodySegment, initSnakeHead } from '../reducers/Snake';

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

export function getRandomCoordinates(
	min: number,
	max: number
): [number, number] {
	const randX = getRandomNumberFromInterval(0, max);
	const randY = getRandomNumberFromInterval(0, max);
	return [randX, randY];
}

function getRandomNumberFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

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
