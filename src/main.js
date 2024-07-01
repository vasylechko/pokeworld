import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { initializeApp } from "firebase/app";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import store from "./store";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyBNfNs0r1sWis0UIYYmwdW9pivOlYuqWo0",
  authDomain: "pokeworld-a4166.firebaseapp.com",
  databaseURL: "https://pokeworld-a4166-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokeworld-a4166",
  storageBucket: "pokeworld-a4166.appspot.com",
  messagingSenderId: "828424794560",
  appId: "1:828424794560:web:1ea31eabab815fbfa9d825",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ToastPlugin);
app.mount("#app");
