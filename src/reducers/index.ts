import { configureStore, combineReducers } from '@reduxjs/toolkit';

import BoardDataReducer from './BoardData';
import DirectionReducer from './Direction';
import Snake from './Snake';
import Food from './Food';
import GameState from './GameState';

const rootReducer = combineReducers({
	GameState: GameState,
	Direction: DirectionReducer,
	BoardData: BoardDataReducer,
	Snake: Snake,
	Food: Food,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({ reducer: rootReducer });
