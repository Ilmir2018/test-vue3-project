import { createApp } from "vue";

import App from "./App";
import components from "@/components/UI";
import router from "./router/router";

import store from "./store";

import directives from "@/directives";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).mount("#app");
