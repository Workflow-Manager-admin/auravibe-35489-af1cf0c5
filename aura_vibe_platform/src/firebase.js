/**
 * Firebase scaffold for My AuraGram.
 * Provides base configuration for Auth, Firestore/Realtime DB, and Storage.
 * TODO: For full implementation, fill in your own config.
 * You can swap with Supabase or Auth0 if preferred.
 */

 // PUBLIC_INTERFACE
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your Firebase config/environment
const firebaseConfig = {
  apiKey: "FAKE-PLACEHOLDER-KEY", // TODO: replace with env var
  authDomain: "MY-AURAGRAM.firebaseapp.com",
  projectId: "MY-AURAGRAM",
  storageBucket: "MY-AURAGRAM.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:00000000000000"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Option: To use Supabase instead, scaffold a supabaseClient.js here.
