import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import * as Icons from "@kalimahapps/vue-icons";

const app = createApp(App);

app.use(Antd);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.mount("#app");
