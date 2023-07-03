import React from 'react';
import store from '../reducers';

import { Direction, setDirection } from '../reducers/Direction';

export function handleKeyDown(e: any) {
	if (isKeyValid(e.key)) {
		// Set direction here
		const direction = getDirectionFromKey(e.key);
		console.log('New direction = ', direction);
		setCurrentDirection(direction);
	}
}

function getDirectionFromKey(key: string): Direction {
	key = key.toUpperCase();
	if (key === 'ARROWUP' || key === 'W') return Direction.NORTH;
	else if (key === 'ARROWDOWN' || key === 'S') return Direction.SOUTH;
	else if (key === 'ARROWLEFT' || key === 'A') return Direction.WEST;
	else if (key === 'ARROWRIGHT' || key === 'D') return Direction.EAST;
	else throw new Error('Key is not valid.');
}

function isKeyValid(key: string) {
	// Accept WASD & Arrow keys
	const validKeysArray = [
		'ARROWUP',
		'ARROWRIGHT',
		'ARROWDOWN',
		'ARROWLEFT',
		'W',
		'D',
		'S',
		'A',
	];
	if (validKeysArray.includes(key.toUpperCase())) return true;
	else return false;
}

export function setCurrentDirection(direction: Direction) {
	store.dispatch(setDirection(direction));
}
