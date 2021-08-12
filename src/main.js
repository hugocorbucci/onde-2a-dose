import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_API_KEY,
    libraries: "places",
  },
});

app.mount("#app");
