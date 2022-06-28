import { createApp } from "vue"
import App from "./App.vue"

import pinia from "./pinia"

const app = createApp(App)

// 挂载 pinia
app.use(pinia)

app.mount("#app")
