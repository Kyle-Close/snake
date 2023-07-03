import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum SquareState {
	EMPTY = 'EMPTY',
	FOOD = 'FOOD',
	HEAD = 'HEAD',
	BODY = 'BODY',
}

export enum Direction {
	NORTH = 'NORTH',
	EAST = 'EAST',
	SOUTH = 'SOUTH',
	WEST = 'WEST',
}

const initialState = {
	direction: getRandomDirection(),
	squaresArray: initializeBoard(10),
};

const BoardSlice = createSlice({
	name: 'boardData',
	initialState,
	reducers: {
		setSquare(
			state,
			action: PayloadAction<{
				state: SquareState;
				coordinates: [number, number];
			}>
		) {
			const [x, y] = action.payload.coordinates;
			state.squaresArray[x][y] = action.payload.state;
		},
	},
});

export default BoardSlice.reducer;
export const { setSquare } = BoardSlice.actions;

// Helper - Util functions
function initializeBoard(boardSize: number): SquareState[][] {
	const emptyBoard = new Array(boardSize);
	for (let i = 0; i < boardSize; i++) {
		emptyBoard[i] = new Array(boardSize).fill(SquareState.EMPTY);
	}
	return emptyBoard;
}

function getRandomDirection() {
	const directions = Object.values(Direction);
	const randomDirection =
		directions[Math.floor(Math.random() * directions.length)];
	return randomDirection;
}
