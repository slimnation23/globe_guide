import "./styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import AverageFuel from "./components/AverageFuel.vue";
import TravelCost from "./components/TravelCost.vue"

createApp(App)
  .component("travel-cost", TravelCost)
  .component("average-fuel", AverageFuel)
  .mount("#app");