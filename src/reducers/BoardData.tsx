import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum SquareState {
	EMPTY = 'EMPTY',
	FOOD = 'FOOD',
	HEAD = 'HEAD',
	BODY = 'BODY',
}

const BOARD_SIZE = 10;

const initialState = {
	squaresArray: initializeBoard(BOARD_SIZE),
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
		resetBoard(state) {
			state.squaresArray = initializeBoard(BOARD_SIZE);
		},
	},
});

export default BoardSlice.reducer;
export const { setSquare, resetBoard } = BoardSlice.actions;

// Helper - Util functions
function initializeBoard(boardSize: number): SquareState[][] {
	const emptyBoard = new Array(boardSize);
	for (let i = 0; i < boardSize; i++) {
		emptyBoard[i] = new Array(boardSize).fill(SquareState.EMPTY);
	}
	return emptyBoard;
}
