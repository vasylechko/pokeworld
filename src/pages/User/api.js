import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const $toast = useToast();

export async function registerUser(userData) {
  try {
    const response = await createUserWithEmailAndPassword(
      getAuth(),
      userData.email,
      userData.password,
    );

    return response.data;
  } catch (error) {
    throw error(error);
  }
}

export async function loginUser(userData) {
  try {
    const response = await signInWithEmailAndPassword(getAuth(), userData.email, userData.password);

    return response.data;
  } catch (error) {
    $toast.error("Не правильний логін чи пароль");

    throw error(error);
  }
}

export async function signOutUser() {
  try {
    await signOut(getAuth());
  } catch (error) {
    throw error(error);
  }
}
