import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum Direction {
	NORTH = 'NORTH',
	EAST = 'EAST',
	SOUTH = 'SOUTH',
	WEST = 'WEST',
}

export function getRandomDirection() {
	const directions = Object.values(Direction);
	const randomDirection =
		directions[Math.floor(Math.random() * directions.length)];
	return randomDirection;
}

const initialState: { direction: Direction } = {
	direction: getRandomDirection(),
};

const DirectionSlice = createSlice({
	name: 'direction',
	initialState,
	reducers: {
		setDirection(state, action: PayloadAction<Direction>) {
			state.direction = action.payload;
		},
	},
});

export default DirectionSlice.reducer;
export const { setDirection } = DirectionSlice.actions;
