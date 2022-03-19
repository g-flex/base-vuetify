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

To update default colors such as primary, secondary or other colors, edit `/src/plugins/vuetify.js`:
```javascript
let customPrimary = '#2352A2';
let customSecondary = '#28EDBF';

//To pick a color from vuetify presets: 
import colors from 'vuetify/lib/util/colors'

let customPrimary = colors.orange.base;
let customSecondary = colors.green.lighten2;
```

---

### Font

---
