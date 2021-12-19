import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import { APIPlugin } from './stores/APIPlugin';

const pinia = createPinia();
pinia.use((context) => APIPlugin(context));

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(pinia)
    .mount('#app')
