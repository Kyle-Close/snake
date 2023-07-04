import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getRandomCoordinates } from '../utils/GameLogic';

const initialState: { coordinates: [number, number] } = {
	coordinates: getRandomCoordinates(0, BOARD_SIZE - 1),
};

const FoodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {
		setFoodCoordinates(state, action: PayloadAction<[number, number]>) {
			state.coordinates = action.payload;
		},
	},
});

export default FoodSlice.reducer;
export const { setFoodCoordinates } = FoodSlice.actions;
