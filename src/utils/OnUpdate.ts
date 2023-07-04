import { Direction } from '../reducers/Direction';
import store from '../reducers';
import { moveSnakeOnUpdate } from '../reducers/Snake';
import { SquareState, resetBoard, setSquare } from '../reducers/BoardData';

export function update() {
	// Check if snake head hit wall

	// Check if snake ate food
	if (isSnakeOnFood()) {
		console.log('NomNomNom');
	}
	// Update snakes position based on next positions
	updateSnakePosition();
	// Update the BoardData state so we can see the snake on the board
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

function isSnakeOnFood() {
	const state = store.getState();
	const foodCoordinates = state.Food.coordinates;
	const nextSnakeHeadCoordinates = state.Snake.snake[0].next;

	if (isArraysEqual(foodCoordinates, nextSnakeHeadCoordinates)) return true;
	else return false;
}

function isArraysEqual(a: [number, number], b: [number, number]): boolean {
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
}

function updateSnakePosition() {
	const state = store.getState();
	const direction = state.Direction.direction;

	store.dispatch(moveSnakeOnUpdate({ direction: direction }));
}

function updateBoard() {
	const state = store.getState();
	const snakeList = state.Snake.snake;
	const foodCoords = state.Food.coordinates;

	// Clear board
	store.dispatch(resetBoard());
	// Place food
	store.dispatch(
		setSquare({
			state: SquareState.FOOD,
			coordinates: foodCoords,
		})
	);
	// Place snake head
	store.dispatch(
		setSquare({
			state: SquareState.HEAD,
			coordinates: snakeList[0].current,
		})
	);

	// Place snake body
	for (let i = 1; i < snakeList.length; i++) {
		store.dispatch(
			setSquare({
				state: SquareState.BODY,
				coordinates: snakeList[i].current,
			})
		);
	}
}
