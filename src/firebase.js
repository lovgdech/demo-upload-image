import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZsm0b2NNvBYW6hfdP0pHez-3n2-CZeVY",
  authDomain: "fir-upload-image-fc2da.firebaseapp.com",
  projectId: "fir-upload-image-fc2da",
  storageBucket: "fir-upload-image-fc2da.appspot.com",
  messagingSenderId: "216488299295",
  appId: "1:216488299295:web:806c2a3d89a1cb4c677e2a",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
