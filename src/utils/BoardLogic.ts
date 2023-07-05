import store from '../reducers';
import { resetBoard, setSquare, SquareState } from '../reducers/BoardData';

export function updateBoard() {
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
