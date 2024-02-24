import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		screens: {
			md: '768px',
			lg: '992px',
			xl: '1280px',
			'2xl': '1400px',
		},
		extend: {
			colors: {
				background: 'var(--background)',
			},
		},
	},
	plugins: [],
} satisfies Config;

export default config;
