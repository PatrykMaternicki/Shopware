import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.css";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.mount("#app");
