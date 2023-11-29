/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'lg': '10px 10px 0px 0px rgba(0,0,0,0.75);'
			},
			minHeight: {
				'screen': "80vh"
			},
			colors: {
				colors: {
					'lynch': {
						'50': '#f4f7f9',
    					'100': '#ebf0f4',
						'200': '#dae4eb',
						'300': '#c4d1dd',
						'400': '#abbbce',
						'500': '#95a6bf',
						'600': '#7e8dad',
						'700': '#6a7795',
						'800': '#59637a',
						'900': '#4b5364',
						'950': '#2c303a',
					},		
				},
			},
		},
	
	},
	plugins: [],
}
