import Vue from 'vue'
import App from './App.vue'
import router from './router';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAyr9anxctqICQPuChuo0HEhJevyRzj-XM",
    libraries: "places"
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');