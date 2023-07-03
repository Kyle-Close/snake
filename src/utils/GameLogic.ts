import store from '../reducers';

import { setSquare, SquareState } from '../reducers/BoardData';
import { Direction, setDirection } from '../reducers/Direction';

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
) {
	const [x, y] = headCoordinates;

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
			break;
	}
}

export function setFoodLocation() {
	const randX = getRandomNumberFromInterval(0, 9);
	const randY = getRandomNumberFromInterval(0, 9);
	store.dispatch(
		setSquare({ state: SquareState.FOOD, coordinates: [randX, randY] })
	);
}

function getRandomNumberFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function update() {
	// Get next head coordinate based on current direction
}
