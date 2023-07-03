import React from 'react';
import store from '../reducers';
import { setSquare, SquareState } from '../reducers/BoardData';

export function setHeadStartingSquare(gridSize: number) {
	console.log('SetHeadStartingSquare called...');
	const center = Math.floor(gridSize / 2);
	store.dispatch(
		setSquare({
			state: SquareState.HEAD,
			coordinates: [center, center],
		})
	);
}

export function setInitialSnakeBodySquares() {}
