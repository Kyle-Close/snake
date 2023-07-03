import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { SquareState } from '../reducers/BoardData';

interface SquareProps {
	squareState: SquareState;
}

function Square({ squareState }: SquareProps) {
	const className = () => {
		switch (squareState) {
			case SquareState.EMPTY:
				return 'bg-white';
			case SquareState.FOOD:
				return 'bg-green-400';
			case SquareState.HEAD:
				return 'bg-blue-600';
			case SquareState.BODY:
				return 'bg-blue-300';
		}
	};

	return (
		<div
			key={uuidv4()}
			className={className()}
		></div>
	);
}

export default Square;
