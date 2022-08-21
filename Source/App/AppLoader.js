//* Imports Necessary Methods from Vue
import { createApp } from 'vue'

//* Imports the Root Component and Store
import App from './App.vue'
import Store from './AppStore';

//* Creates the application instance
const VueApp = createApp(App);

//* Installs the store instance as a plugin
VueApp.use(Store);

//* Mounts the application instance
VueApp.mount('#bodyVueContainer');
