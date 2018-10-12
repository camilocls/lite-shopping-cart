import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./css/main.css";
import { setCurrency } from "./utils";

Vue.config.productionTip = false;
Vue.filter("setCurrency", setCurrency);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
