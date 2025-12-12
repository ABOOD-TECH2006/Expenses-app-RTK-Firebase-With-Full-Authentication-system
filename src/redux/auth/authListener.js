import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { initializeAuth } from "./authThunks";

export function startAuthListener(store) {
  onAuthStateChanged(auth, (firebaseUser) => {
    store.dispatch(initializeAuth(firebaseUser));
  });
}
