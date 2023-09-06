module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				sans: ['Mulish', 'sans-serif']
			},
			colors: {
				primary: '#006AFF',
				black: '#141516'
			}
		}
	},
	plugins: [function ({ addComponents }) {
		addComponents({
			".container": {
				maxWidth: "100%",
				"@screen sm": {
					maxWidth: "640px",
				},
				"@screen md": {
					maxWidth: "768px",
				},
				"@screen lg": {
					maxWidth: "1024px",
				},
				"@screen xl": {
					maxWidth: "1040px",
				},
			},
		});
	},]
}
