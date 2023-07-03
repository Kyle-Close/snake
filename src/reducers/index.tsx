import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Direction } from './Direction';

import BoardDataReducer from './BoardData';
import DirectionReducer from './Direction';

const rootReducer = combineReducers({
	Direction: DirectionReducer,
	BoardData: BoardDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({ reducer: rootReducer });
