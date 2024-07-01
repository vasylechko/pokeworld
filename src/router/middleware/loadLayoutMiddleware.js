import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStore } from "vuex";

export async function loadLayoutMiddleware(route) {
  const store = useStore();

  onAuthStateChanged(getAuth(), (user) => {
    store.commit("user/SET_USER_DATA", user?.metadata);
    store.commit("user/SET_USER_ID", user?.uid ? user.uid : "");
  });

  try {
    let layout = route.meta.layout;
    let layoutComponent = await import(`../../layouts/${layout}/index.vue`);

    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    let layout = "main";
    let layoutComponent = await import(`../../layouts/${layout}/index.vue`);

    route.meta.layoutComponent = layoutComponent.default;
  }
}
