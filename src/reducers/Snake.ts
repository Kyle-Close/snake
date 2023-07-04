import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { getNextHeadCoordinates } from '../utils/OnUpdate';
import { Direction } from './Direction';

interface SnakeSegment {
    current: [number, number];
    next: [number, number];
}

const initialState = {
	snake: [] as SnakeSegment[]
};

const SnakeSlice = createSlice({
	name: 'snake',
	initialState,
	reducers: {
		initSnakeHead(state, action: PayloadAction<{
            direction: Direction
            headCoordinates: [number, number]
        }>) {
			const snake = state.snake
            const snakeHead = {
                current: action.payload.headCoordinates,
                next: getNextHeadCoordinates(action.payload.direction, action.payload.headCoordinates)
            }
            snake.push(snakeHead)
		},
        addSnakeBodySegment(state, action: PayloadAction<{
            bodyCoordinates: [number, number]
        }>){
			const snake = state.snake
            const snakeBody = {
                current: action.payload.bodyCoordinates,
                next: snake[snake.length - 1].current
            }
            snake.push(snakeBody)
        }
	},
});

export default SnakeSlice.reducer;
export const { initSnakeHead, addSnakeBodySegment } = SnakeSlice.actions;
