import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { BOARD_SIZE } from './BoardData';
import { getRandomCoordinates } from '../utils/Utilities';

const initialState: { coordinates: [number, number] } = {
	coordinates: getRandomCoordinates(BOARD_SIZE - 1),
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
