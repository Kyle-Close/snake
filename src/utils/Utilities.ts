export function getRandomCoordinates(max: number): [number, number] {
	const randX = getRandomNumberFromInterval(0, max);
	const randY = getRandomNumberFromInterval(0, max);
	return [randX, randY];
}

function getRandomNumberFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isArraysEqual(
	a: [number, number],
	b: [number, number]
): boolean {
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
}
