//* Import Necessary Methods from Vue and Vuex
import { createApp } from 'vue'
import { createStore } from 'vuex'

//* Import the Root Component
import App from './App.vue'

//* Creates the application instance
const VueApp = createApp(App).mount('#app');

//* Install the store instance as a plugin
VueApp.use(store)
