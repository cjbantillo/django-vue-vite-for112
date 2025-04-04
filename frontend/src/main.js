import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Adjust path if needed
import axios from 'axios';
import Vuetify from 'vuetify'; // Assuming you're using Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Configure Axios
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Create Vuetify instance (adjust based on your Vuetify setup)
const vuetify = Vuetify.createVuetify();

// Create the app
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.config.globalProperties.$axios = axios; // Make Axios available globally
app.mount('#app');