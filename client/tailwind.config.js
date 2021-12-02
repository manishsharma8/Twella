module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			text: 'text',
			'ew-resize': 'ew-resize',
		},
		extend: {
			transitionProperty: {
				height: 'height',
			},
		},
	},
	variants: {
		extend: {
			animation: ['motion-safe'],
		},
	},
	plugins: [],
};
