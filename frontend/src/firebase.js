import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVSrhnWC6nv22iqRM0qPvXGHdpXxDulI4",
  authDomain: "chronohire-dashboard.firebaseapp.com",
  projectId: "chronohire-dashboard",
  storageBucket: "chronohire-dashboard.firebasestorage.app",
  messagingSenderId: "780262899794",
  appId: "1:780262899794:web:388eadcde9db88b939df8b",
  measurementId: "G-PV1FWQ93FH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;