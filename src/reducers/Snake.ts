import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { getNextHeadCoordinates } from '../utils/OnUpdate';
import { Direction } from './Direction';

interface SnakeSegment {
	current: [number, number];
	next: [number, number];
}

const initialState = {
	snake: [] as SnakeSegment[],
};

const SnakeSlice = createSlice({
	name: 'snake',
	initialState,
	reducers: {
		initSnakeHead(
			state,
			action: PayloadAction<{
				direction: Direction;
				headCoordinates: [number, number];
			}>
		) {
			const snake = state.snake;
			const snakeHead = {
				current: action.payload.headCoordinates,
				next: getNextHeadCoordinates(
					action.payload.direction,
					action.payload.headCoordinates
				),
			};
			snake.push(snakeHead);
		},
		updateSnakeHeadNextCoordinate(
			state,
			action: PayloadAction<{
				direction: Direction;
			}>
		) {
			const snake = state.snake;
			snake[0].next = getNextHeadCoordinates(
				action.payload.direction,
				snake[0].current
			);
		},
		addSnakeBodySegment(
			state,
			action: PayloadAction<{
				bodyCoordinates: [number, number];
			}>
		) {
			const snake = state.snake;
			const snakeBody = {
				current: action.payload.bodyCoordinates,
				next: snake[snake.length - 1].current,
			};
			snake.push(snakeBody);
		},
		moveSnakeOnUpdate(
			state,
			action: PayloadAction<{
				direction: Direction;
			}>
		) {
			const snake = state.snake;
			const snakeLength = snake.length;

			for (let i = 0; i < snakeLength; i++) {
				if (i === 0) {
					// On head
					snake[i].current = snake[i].next;
					snake[i].next = getNextHeadCoordinates(
						action.payload.direction,
						snake[i].current
					);
				} else {
					// On body
					snake[i].current = snake[i].next;
					snake[i].next = snake[i - 1].current;
				}
			}
		},
		growSnake(
			state,
			action: PayloadAction<{
				direction: Direction;
			}>
		) {
			const snake = state.snake;
            const snakeHead = {
                current:
                next:
            }
            snake.unshift()
		},
	},
});

export default SnakeSlice.reducer;
export const {
	initSnakeHead,
	addSnakeBodySegment,
	moveSnakeOnUpdate,
	updateSnakeHeadNextCoordinate,
} = SnakeSlice.actions;
