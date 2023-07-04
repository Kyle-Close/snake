import { configureStore, combineReducers } from '@reduxjs/toolkit';

import BoardDataReducer from './BoardData';
import DirectionReducer from './Direction';
import Snake from './Snake'

const rootReducer = combineReducers({
	Direction: DirectionReducer,
	BoardData: BoardDataReducer,
	Snake: Snake,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({ reducer: rootReducer });
