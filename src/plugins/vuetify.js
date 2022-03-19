// Styles
import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

// Vuetify
import { createVuetify } from "vuetify";

let customPrimary = '#2352A2';
let customSecondary = '#28EDBF';

export default createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	theme: {
		themes: {
			dark: {
				dark: true,
				colors: {
					primary: customPrimary,
					secondary: customSecondary,
				}
			},
			light: {
				dark: false,
				colors: {
					primary: customPrimary,
					secondary: customSecondary,
				}
			}
		}
	},
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
