/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'game-pattern-wide': "url('/src/img/game-background-wide-screen.svg')",
				'game-pattern-tall':
					"url('/src/img/game-background-vertical-screen.svg')",
			},
		},
	},
	plugins: [],
};
