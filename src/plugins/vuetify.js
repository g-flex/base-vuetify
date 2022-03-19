// Styles
import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from "vuetify";

let customPrimary = colors.orange.base;
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
