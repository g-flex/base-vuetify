# Base Vuetify quickstart theme

## Installation
Clone the repo, enter it and install dependencies
```
cd base-vuetify
npm install
```

## Structure
<details>
<summary>Here is a tree view of the main files</summary>


```
├── node_modules
│   └── vuetify
│       │ 
│       └── lib
│           ├── util
│           │   └── color
│           │       └── colors.mjs
│           │ 
│           └── styles
│               └── settings
│                   └── settings
│                       ├── _colors.scss
│                       └── _variables.scss
│   
├── package.json
│   
├── public
│   ├── favicon.ico
│   └── index.html
│   
├── src
│   ├── App.vue
│   │   
│   ├── assets
│   │   └── scss
│   │       ├── _variables.scss
│   │       └── style.scss
│   │   
│   ├── components
│   │   ├── FooterComponent.vue
│   │   ├── HeaderComponent.vue
│   │   └── HelloWorld.vue
│   │   
│   ├── main.js
│   │   
│   ├── plugins
│   │   ├── vuetify.js
│   │   └── webfontloader.js
│   │   
│   ├── router
│   │   └── index.js
│   │   
│   └── views
│       ├── AboutView.vue
│       └── HomeView.vue
│   
└── vue.config.js
```


</details>


## Customizing defaults
### Colors
Find a beakdown of available variabilized colors [here](https://vuetifyjs.com/en/styles/colors/#material-colors).

<details>
<summary>Usage</summary>


To update default colors such as primary, secondary or other colors, edit `/src/plugins/vuetify.js`:
```javascript
let customPrimary = '#2352A2';
let customSecondary = '#28EDBF';

//To pick a color from vuetify presets: 
import colors from 'vuetify/lib/util/colors'

let customPrimary = colors.orange.base;
let customSecondary = colors.green.lighten2;
```


</details>

---


### Fonts
View a glimpse of the texts customizations by Vuetify [here](https://vuetifyjs.com/en/styles/text-and-typography/#typography).

<details>
<summary>Usage</summary>


To change primary font, load it in `/src/plugins/webfontloader.js`:
```javascript
webFontLoader.load({
	google: {
		families: ["Oxygen:100,300,400,500,700,900&display=swap"],
	},
});
```
Then, edit `/src/assets/scss/style.scss`:
```scss
$body-font-family: 'Oxygen';
```


</details>

---


### Icons
Search the icon you are looking for from the Material Design Icons' pack [here](https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons).

<details>
<summary>Usage</summary>


Load it in your component:
```javascript
import { mdiMenu, mdiMenuOpen } from "@mdi/js";
//...
data: () => ({
	icons: {
		menu: mdiMenu,
		menuOpen: mdiMenuOpen
	}
})
//...
```
And use it:
```vue
<v-icon>{{ icons.menu }}</v-icon>
```


</details>

---


### Images
Similar to icons, loading local assets

<details>
<summary>Usage</summary>


Load it in your component:
```javascript
//...
data: () => ({
	images:{
		logo: require(`@/assets/img/logo.svg`)
	}
})
//...
```
And use it:
```vue
<v-img :src="images.logo" contain height="200" />
```


</details>

---


## Let's start
Just run `npm run serve` and you're set! 