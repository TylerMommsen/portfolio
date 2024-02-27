import type { Config } from 'tailwindcss';

const svgToDataUri = require('mini-svg-data-uri');

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

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
				primary: 'var(--primary)',
				primary2: 'var(--primary2)',
				secondary: 'var(--secondary)',
				secondary2: 'var(--secondary2)',
				tertiary: 'var(--tertiary)',
				accent: 'var(--accent)',
				accent2: 'var(--accent2)',
				accent3: 'var(--accent3)',
			},
			animation: {
				gradientText: 'gradientText 6s linear infinite',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite',
			},
			keyframes: {
				gradientText: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)',
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'50%': {
						transform: 'rotate(180deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)',
					},
					'50%': {
						transform: 'translateY(50%)',
					},
					'100%': {
						transform: 'translateY(-50%)',
					},
				},
			},
		},
	},
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		},
	],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}

export default config;
