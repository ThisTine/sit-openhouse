import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/share/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily:{
				'sans': ["'Roboto'",...defaultTheme.fontFamily.sans]
			},
			colors:{
				'primary': '#3366CC',
				'secondary': '#336699',
				'text-primary': '#E8E8E8',
				'gray-4': '#505050',
				'gray-3': '#B5B5B5',
				'gray-2': '#E1E1E1',
				'gray-1': '#F9F9F9'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
};
export default config;
