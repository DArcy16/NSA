/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: " #121383",
				primary_light: "#2D2EC533",
				secondary: "#023E8A",
				third: "#ED9609",
			},
		},
	},
	plugins: [],
};

