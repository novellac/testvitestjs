import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// // Mimics a multi-SPA setup with a folder of shared components at the top level of the repo
// const components = import.meta.glob('/shared/components/base/*.vue', {eager: true})
// Object.entries(components).forEach(([path, definition]) => {
//   // Get name of component, based on filename
//   const componentName = path.split('/').pop().replace(/\.\w+$/, '')

//   // Register component on this Vue instance
//   app.component(componentName, definition.default)
// })

app.mount('#app')
