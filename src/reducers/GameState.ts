import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum GameState {
	PLAYING = 'PLAYING',
	MENU = 'MENU',
}
interface GameStateSliceState {
	gameState: GameState;
	intervalId: any;
}

const initialState: GameStateSliceState = {
	gameState: GameState.MENU,
	intervalId: null,
};

const GameStateSlice = createSlice({
	name: 'gameState',
	initialState,
	reducers: {
		setGameState(state, action: PayloadAction<GameState>) {
			state.gameState = action.payload;
		},
		setIntervalId(state, action: PayloadAction<any>) {
			state.intervalId = action.payload;
		},
	},
});

export default GameStateSlice.reducer;
export const { setGameState, setIntervalId } = GameStateSlice.actions;
