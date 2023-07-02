import { configureStore, combineReducers } from '@reduxjs/toolkit';

import BoardData from './BoardData';

const rootReducer = combineReducers({
	BoardData,
});

export default configureStore({ reducer: rootReducer });
