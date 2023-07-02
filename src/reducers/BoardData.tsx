export enum SquareState {
	EMPTY = 'EMPTY',
	FOOD = 'FOOD',
	HEAD = 'HEAD',
	BODY = 'BODY',
}

function initializeBoard(boardSize: number): SquareState[][] {
	const emptyBoard = new Array(boardSize);
	for (let i = 0; i < boardSize; i++) {
		emptyBoard[i] = new Array(boardSize).fill(SquareState.EMPTY);
	}
	return emptyBoard;
}

export function setSquare(state: SquareState, coordinates: [number, number]) {
	return {
		type: 'SET_SQUARE',
		payload: { state, coordinates },
	};
}

export default function BoardData(
	state = initializeBoard(10),
	action: { type: string; payload: any }
) {
	switch (action.type) {
		case 'SET_SQUARE':
			const newBoard = state.map((arr) => [...arr]);
			const [x, y] = action.payload.coordinates;
			newBoard[x][y] = action.payload.state;
			return newBoard;
		default:
			return state;
	}
}
