import { configureStore, combineReducers } from '@reduxjs/toolkit';

import BoardDataReducer from './BoardData';

const rootReducer = combineReducers({
	BoardData: BoardDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({ reducer: rootReducer });
